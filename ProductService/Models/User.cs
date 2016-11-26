using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserService.Models
{
    public class User
    {
        public string username { get; set; }
        public string password { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public Address address { get; set; }
        public Card card { get; set; }
    }
    public class Address
    {
        public string street_address {get; set; }
        public string city { get; set; }
        public string zip_code { get; set; }
    }
    public class Card
    {
        public string card_number { get; set; }
        public string exp_date { get; set; }
        public string card_code { get; set; }
    }

    public class Item
    {
        public double price { get; set; }
        public string name { get; set; }
    }

    public class Bikepart : Item
    {
        public string id { get; set; }
        public string photo { get; set; }

 
    }

    public class Custombike: Item
    {
        public string forkColor
        {
            get; set;
        }
        public string frameColor { get; set; }
        public string frameDecalColor { get; set; }
        public string seatColor { get; set; }
    }

    public class Cartitem
    {
        public Item item { set; get; }
        public int quantity
        {
            set; get;
        }
    }


}