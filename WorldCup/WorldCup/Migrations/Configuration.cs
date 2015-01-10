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
                new Country { countryId = 1, name = "Alemania", group = "G", seed = 1, cups = 4 },
                new Country { countryId = 2, name = "Argentina", group = "F", seed = 1, cups = 2 },
                new Country { countryId = 3, name = "Holanda", group = "B", seed = 2, cups = 0 },
                new Country { countryId = 4, name = "Brasil", group = "A", seed = 1, cups = 5 },
                new Country { countryId = 5, name = "Francia", group = "E", seed = 3, cups = 1 },
                new Country { countryId = 6, name = "Colombia", group = "C", seed = 1, cups = 0 },
                new Country { countryId = 7, name = "Camerun", group = "A", seed = 4, cups = 0 },
                new Country { countryId = 8, name = "Croacia", group = "A", seed = 2, cups = 0 }
            });

            context.Players.AddOrUpdate(new Player[] {
                new Player { PlayerId = 1, Name = "Mario Goetze", BornDate = new DateTime(1992, 06, 03), Position = "DEL", Number = 19, CountryId = 1 },
                new Player { PlayerId = 2, Name = "Gonzalo Higuain", BornDate = new DateTime(1987, 12, 10), Position = "DEL", Number = 9, CountryId = 2 }
            });
        }
    }
}
