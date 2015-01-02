using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WorldCup.Models
{
    public class Player
    {
        public int PlayerId { get; set; }
        public string Name { get; set; }
        public DateTime BornDate { get; set; }
        public string Position { get; set; }
        public int Number { get; set; }
        public int CountryId { get; set; }
        [ForeignKey("CountryId")]
        public Country Team { get; set; }
    }
}