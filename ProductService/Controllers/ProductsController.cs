using OrdersApp.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using UserService.Models;

namespace OrdersApp.Controllers
{
    public class OrdersController : ApiController
    {
        [Route("api/order")]
        public IHttpActionResult GetAllOrders()
        {
            return Ok(getOrders());
        }

        [Route("api/order/{username}")]
        public IHttpActionResult GetOrders(string username)
        {
            Dictionary<string, List<Order>> orders = getOrders();
            try
            {
                return Ok(orders[username]);
            }
            catch
            {
                return NotFound();
            }
        }

        [Route("api/order/{username}")]
        public IHttpActionResult Post(string username, [FromBody]Order value)
        {
            Dictionary<string, List<Order>> orders = getOrders();
            if(orders.ContainsKey(username))
            {
                orders[username].Add(value);
            }
            else
            {
                List<Order> new_orders = new List<Order>();
                new_orders.Add(value);
                orders.Add(username, new_orders);
            }
            writeOrders(orders);

            return Ok(getOrders());
        }

        private void writeOrders(Dictionary<string, List<Order>> orders)
        {
            var json = new JavaScriptSerializer().Serialize(orders);
            var base_path = System.IO.Path.GetTempPath();
            string path = base_path + "orders.txt";

            // This text is added only once to the file.
            File.WriteAllText(path, json);
        }

        private Dictionary<string, List<Order>> getOrders()
        {
            try
            {
                var path = System.IO.Path.GetTempPath() + "orders.txt";
                var json = File.ReadAllText(path);
                Dictionary<string, List<Order>> orders = new JavaScriptSerializer().Deserialize<Dictionary<string, List<Order>>>(json);
                return orders;
            }
            catch (Exception e)
            {
                return new Dictionary<string, List<Order>>();
            }
        }
    }
}
