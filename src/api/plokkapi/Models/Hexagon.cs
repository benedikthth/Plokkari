using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plokkapi.Models
{
    public class Hexagon
    {
        public long Id { get; set; }
        public long H3Id { get; set; }
        public float CenterLatitude { get; set; }
        public float CenterLongitude { get; set; }
    }
}
