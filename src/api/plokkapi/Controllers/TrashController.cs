using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using plokkapi.Repositories;
using plokkapi.Services;
using plokkapi.Models;

namespace plokkapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrashController : ControllerBase
    {

        private readonly ITrashService trashService;



        private readonly ILogger<TrashController> _logger;

        public TrashController(ITrashService its, ILogger<TrashController> logger)
        {
            _logger = logger;
            trashService = its;
        }

        [HttpGet]
        /// <param name="LowerLatBound" example="1">The integration property ID. Events related to presentations related to this ID will be returned</param>
        public async Task<IActionResult> GetHexagons([FromQuery] float LowerLatBound, [FromQuery] float LowerLngBound, [FromQuery] float UpperLatBound, [FromQuery] float UpperLngBound)
        {
            return Ok(await trashService.GetHexagons(LowerLatBound, LowerLngBound, UpperLatBound, UpperLngBound));
        }


        [HttpPost]
        public async Task<IActionResult> PostCleanup([FromBody] CleanupRequestBody cleanup)
        {
            await trashService.AddCleanupRecords(cleanup);
            return Ok();
        }

    }
}
