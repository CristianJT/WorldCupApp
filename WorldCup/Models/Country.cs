using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorldCup.Models
{
    public class Country
    {
        public int countryId { get; set; }
        public string name { get; set; }
        public string group { get; set; }
        public int seed { get; set; }
        public int cups { get; set; }
    }
}