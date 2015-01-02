using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WorldCup.Models;

namespace WorldCup.Controllers
{
    [RoutePrefix("api/players")]
    public class PlayersController : ApiController
    {
        private WorldCupContext db = new WorldCupContext();

        // GET: api/players
        [Route("")]
        public IQueryable<Player> GetPlayers()
        {
            return db.Players;
        }

        // GET: api/players/{id}
        [Route("{id:int}")]
        [ResponseType(typeof(Player))]
        public async Task<IHttpActionResult> GetPlayer(int id)
        {
            Player player = await db.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            return Ok(player);
        }

        // GET: api/countries/{id}/players
        [Route("~/api/countries/{id}/players")]
        public IQueryable<Player> GetPlayersByCountry(int id)
        {
            return db.Players.Include(p => p.Team)
                .Where(p => p.CountryId == id);
        }

        // POST: api/Players
        [ResponseType(typeof(Player))]
        public async Task<IHttpActionResult> PostPlayer(Player player)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Players.Add(player);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = player.PlayerId }, player);
        }

        // DELETE: api/players/{id}
        [Route("{id}")]
        [ResponseType(typeof(Player))]
        public async Task<IHttpActionResult> DeletePlayer(int id)
        {
            Player player = await db.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            db.Players.Remove(player);
            await db.SaveChangesAsync();

            return Ok(player);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerExists(int id)
        {
            return db.Players.Count(e => e.PlayerId == id) > 0;
        }
    }
}