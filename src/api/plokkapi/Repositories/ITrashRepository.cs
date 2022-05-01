using H3.Model;
using NetTopologySuite.Geometries;
using plokkapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plokkapi.Repositories
{
    public interface ITrashRepository
    {
        public Task<IEnumerable<Hexagon>> GetHexagons(float LowerLatBound, float LowerLngBound, float UpperLatBound, float UpperLngBound);
        public Task AddCleanupRecord(long? hexagonId);
        public Task<bool> CheckCoordinateInBounds(Coordinate cellCoordinate);
        public Task<Hexagon> GetHexagon(long hexId);
        public Task<long> InsertHexagon(long h3index, float center_latitude, float center_longitude);
        Task<bool> CheckHexInBounds(GeoCoord v1, GeoCoord v2, GeoCoord v3, GeoCoord v4, GeoCoord v5, GeoCoord v6);
    }
}
