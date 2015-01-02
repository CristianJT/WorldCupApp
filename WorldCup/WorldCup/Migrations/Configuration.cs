namespace WorldCup.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WorldCup.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WorldCup.Models.WorldCupContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WorldCup.Models.WorldCupContext context)
        {
            context.Countries.AddOrUpdate(new Country[] {
                new Country { CountryId = 1, Name = "Alemania", Group = "G", Seed = 1, Cups = 4 },
                new Country { CountryId = 2, Name = "Argentina", Group = "F", Seed = 1, Cups = 2 },
                new Country { CountryId = 3, Name = "Holanda", Group = "B", Seed = 2, Cups = 0 },
                new Country { CountryId = 4, Name = "Brasil", Group = "A", Seed = 1, Cups = 5 },
                new Country { CountryId = 5, Name = "Francia", Group = "E", Seed = 3, Cups = 1 },
                new Country { CountryId = 6, Name = "Colombia", Group = "C", Seed = 1, Cups = 0 }
            });

            context.Players.AddOrUpdate(new Player[] {
                new Player { PlayerId = 1, Name = "Mario Goetze", BornDate = new DateTime(1992, 06, 03), Position = "DEL", Number = 19, CountryId = 1 },
                new Player { PlayerId = 2, Name = "Gonzalo Higuain", BornDate = new DateTime(1987, 12, 10), Position = "DEL", Number = 9, CountryId = 2 }
            });
        }
    }
}
