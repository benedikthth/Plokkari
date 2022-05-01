using plokkapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plokkapi.Services
{
    public interface ITrashService
    {
        public Task<IEnumerable<HexagonDto>> GetHexagons(float latMin, float lngMin, float latMax, float lngMax);
        public Task AddCleanupRecords(CleanupRequestBody cleanupRequest);
    }
}
