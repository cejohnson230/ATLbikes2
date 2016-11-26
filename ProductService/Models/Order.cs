using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdersApp.Models
{
    public class Order
    {
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public UserService.Models.Card card { get; set; }
        public UserService.Models.Address billing_address { get; set; }
        public UserService.Models.Address mail_address { get; set; }
        public List<UserService.Models.Cartitem> cart { get; set; }
    }
}