using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorldCup.Models
{
    public class Country
    {
        public int CountryId { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public int Seed { get; set; }
        public int Cups { get; set; }
    }
}