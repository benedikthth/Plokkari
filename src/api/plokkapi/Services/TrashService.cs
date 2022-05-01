using plokkapi.Infrastructure;
using plokkapi.Models;
using plokkapi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using H3.Algorithms;
using H3.Model;
using NetTopologySuite.Geometries;
using H3.Extensions;
using AutoMapper;

namespace plokkapi.Services
{
    public class TrashService : ITrashService
    {

        private readonly ITrashRepository trashRepository;
        private readonly IMapper autoMapper;

        public TrashService(ITrashRepository repo, IMapper am)
        {
            trashRepository = repo;
            autoMapper = am;
        }

        private async Task AddCleanupRecord(string id)
        {

            H3.H3Index h3index = new(id);
            if (h3index.Resolution != 12)
            {
                throw new ErrorCodeException(400, "INVALIDDATA", "This application expects hexagons with zoom ID 12, you supplied " + h3index.Resolution);
            }

            Coordinate cellCoordinate = H3GeometryExtensions.ToCoordinate(h3index);
            List<GeoCoord> vc = H3GeometryExtensions.GetCellBoundaryVertices(h3index).ToList();
            
            bool cellIsValid = await trashRepository.CheckHexInBounds(vc[0], vc[1], vc[2], vc[3], vc[4], vc[5]); //trashRepository.CheckCoordinateInBounds(cellCoordinate);
            if (!cellIsValid)
            {
                return;
            }

            long? hexagonId = null;
            Hexagon hexagon = await trashRepository.GetHexagon(Convert.ToInt64(id, 16));
            if (hexagon == null)
            {
                hexagonId = await trashRepository.InsertHexagon(Convert.ToInt64(id, 16), (float)cellCoordinate.Y, (float)cellCoordinate.X);
            }
            else
            {
                hexagonId = hexagon.Id;
            }
            if (hexagonId == null)
            {
                throw new ErrorCodeException(500, "HEXAGON", "Hexagon ID was null, either hexagon did not exist, and failed to be inserted, or null is in the database.");
            }

            await trashRepository.AddCleanupRecord(hexagonId);
        }

        public async Task AddCleanupRecords(CleanupRequestBody cleanupRequest)
        {
            string[] uniqueHexagons = cleanupRequest.HexIds.Distinct().ToArray();
            for(int i = 0; i < uniqueHexagons.Length; i++)
            {
                await AddCleanupRecord(uniqueHexagons[i]);
            }
        }

        public async Task<IEnumerable<HexagonDto>> GetHexagons(float LowerLatBound, float LowerLngBound, float UpperLatBound, float UpperLngBound)
        {
            if(LowerLatBound >= UpperLatBound || LowerLngBound >= UpperLngBound)
            {
                throw new ErrorCodeException(400, "INVALIDBOUNDS", "Dimensions of bounding box cannot be zero or negative.");
            }

            return autoMapper.Map<IEnumerable<HexagonDto>>( await trashRepository.GetHexagons(LowerLatBound, LowerLngBound, UpperLatBound, UpperLngBound) );

        }
    }
}
