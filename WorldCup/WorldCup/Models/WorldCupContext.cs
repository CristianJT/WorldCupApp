using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WorldCup.Models
{
    public class WorldCupContext : DbContext
    {
        public WorldCupContext() : base("name=WorldCupContext")
        {
        }

        public System.Data.Entity.DbSet<WorldCup.Models.Country> Countries { get; set; }

        public System.Data.Entity.DbSet<WorldCup.Models.Player> Players { get; set; }
    
    }
}
