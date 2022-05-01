using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plokkapi.Models
{
    public class HexagonQuery
    {
        public float LowerLatBound { get; set; }
        public float LowerLngBound { get; set; }
        public float UpperLatBound { get; set; }
        public float UpperLngBound { get; set; }
    }
}
