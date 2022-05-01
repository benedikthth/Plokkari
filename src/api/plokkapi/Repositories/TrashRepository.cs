using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Npgsql;
using plokkapi.SettingsObjects;

using Dapper;
using System.Text;
using plokkapi.Models;
using NetTopologySuite.Geometries;
using H3.Model;

namespace plokkapi.Repositories
{
    public class TrashRepository : ITrashRepository
    {
        private string connectionString = "User ID=trashApi;password=trashboy;Host=192.168.0.44;Port=6543;Database=postgres;Pooling=true;Connection Lifetime=0;";
        public TrashRepository(IOptions<PsqlSettings> psqlSettings)
        {
            //connectionString = psqlSettings.Value.ConnectionString;
        }


        private readonly string _getHexagonQuery = $@"SELECT
hx.id as {nameof(Hexagon.Id)},
hx.h3index as {nameof(Hexagon.H3Id)},
hx.center_latitude as {nameof(Hexagon.CenterLatitude)},
hx.center_longitude as {nameof(Hexagon.CenterLongitude)}
from public.hexagons hx
where hx.h3index = @hexId;
";
        public async Task<Hexagon> GetHexagon(long hexId)
        {
            var queryBuilder = new StringBuilder(_getHexagonQuery);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                return await connection.QuerySingleOrDefaultAsync<Hexagon>(queryBuilder.ToString(), new { hexId });
            }
        }
        

        private readonly string _selectHexagons = $@"select distinct
hx.id as {nameof(Hexagon.Id)}, 
hx.h3index as {nameof(Hexagon.H3Id)},
hx.center_latitude as {nameof(Hexagon.CenterLatitude)},
hx.center_longitude as {nameof(Hexagon.CenterLongitude)}
from public.hexagons hx
right join public.cleanupRecords cr
on hx.id = cr.hexagon_id
where ST_Point(hx.center_latitude, center_longitude) && ST_MakeEnvelope(@lowerLatBound,@lowerLngBound,@upperLatBound,@upperLngBound)
and  cr.timestamp > NOW() - INTERVAL '31 days' ;";
        public async Task<IEnumerable<Hexagon>> GetHexagons(float lowerLatBound, float lowerLngBound, float upperLatBound, float upperLngBound)
        {
            var queryBuilder = new StringBuilder(_selectHexagons);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                return await connection.QueryAsync<Hexagon>(queryBuilder.ToString(), new { lowerLngBound, lowerLatBound, upperLngBound, upperLatBound });
            }
        }

        private readonly string _insertCleanupRecordQuery = $@"INSERT INTO public.cleanuprecords(hexagon_id) VALUES( @HexId);";
        public async Task AddCleanupRecord(long? HexId)
        {
            var queryBuilder = new StringBuilder(_insertCleanupRecordQuery);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                await connection.ExecuteAsync(queryBuilder.ToString(), new { HexId }) ;
            }
        }

        private readonly string _checkCoordinateValue = $@"select  ST_WITHIN(ST_Point(@x, @y), b.geom) from iceland_shape b";
        public async Task<bool> CheckCoordinateInBounds(Coordinate cellCoordinate)
        {
            var queryBuilder = new StringBuilder(_checkCoordinateValue);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                return await connection.QuerySingleOrDefaultAsync<bool>(queryBuilder.ToString(), cellCoordinate);
            }
        }

        private readonly string _checkHexagonInsideBounds = $@"select 
ST_WITHIN(ST_Point(@y1, @x1), b.geom) or 
ST_WITHIN(ST_Point(@y2, @x2), b.geom) or
ST_WITHIN(ST_Point(@y3, @x3), b.geom) or
ST_WITHIN(ST_Point(@y4, @x4), b.geom) or 
ST_WITHIN(ST_Point(@y5, @x5), b.geom) or
ST_WITHIN(ST_Point(@y6, @x6), b.geom) 
from iceland_shape b";
        public async Task<bool> CheckHexInBounds(GeoCoord v1, GeoCoord v2, GeoCoord v3, GeoCoord v4, GeoCoord v5, GeoCoord v6)
        {
            var queryBuilder = new StringBuilder(_checkHexagonInsideBounds);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                return await connection.QuerySingleOrDefaultAsync<bool>(queryBuilder.ToString(), new {
                    x1 = v1.LatitudeDegrees,
                    y1 = v1.LongitudeDegrees, //

                    x2 = v2.LatitudeDegrees,
                    y2 = v2.LongitudeDegrees,

                    x3 = v3.LatitudeDegrees,
                    y3 = v3.LongitudeDegrees,

                    x4 = v4.LatitudeDegrees,
                    y4 = v4.LongitudeDegrees,

                    x5 = v5.LatitudeDegrees,
                    y5 = v5.LongitudeDegrees,

                    x6 = v6.LatitudeDegrees,
                    y6 = v6.LongitudeDegrees,

                });
            }
        }

        private readonly string _insertHexagon = $@"INSERT INTO public.hexagons (h3index, center_latitude, center_longitude) VALUES (@h3index, @center_latitude, @center_longitude) RETURNING id;";
        public async Task<long> InsertHexagon(long h3index, float center_latitude, float center_longitude)
        {
            var queryBuilder = new StringBuilder(_insertHexagon);
            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();
                return await connection.QuerySingleOrDefaultAsync<long>(queryBuilder.ToString(), new { h3index, center_latitude, center_longitude });
            }
        }
    }
}
