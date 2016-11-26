using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserService.Models;
using System.Web.Script.Serialization;
using System.IO;
namespace ProductService.Controllers
{
    public class UserController : ApiController
    {
        // GET: api/User
        public IHttpActionResult Get()
        {
            return Ok(getUserList());
        }

        // GET: api/User/5
        [Route("api/user/{name}")]
        public IHttpActionResult GetUser(string name)
        {
            List<User> user_list = getUserList();
            var user = user_list.FirstOrDefault((p) => p.username == name);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST: api/User
        public IHttpActionResult Post([FromBody]User value)
        {
            List<User> user_list = getUserList();
            user_list.Add(value);
            writeUserList(user_list);
    
            return Ok(getUserList());
        }

        // PUT: api/User/5
        [Route("api/user/{name}")]
        public IHttpActionResult Put(string name, [FromBody]User value)
        {
            List<User> user_list = getUserList();
            User user = user_list.FirstOrDefault((p) => p.username == name);
            user_list.Remove(user);
            user_list.Add(value);
            writeUserList(user_list);
            return Ok(getUserList());
        }

        [HttpGet]
        [Route("api/user/validate/{username}/{password}")]
        public IHttpActionResult validation(string username, string password)
        {
            List<User> users = getUserList();
            foreach (User user in users)
            {
                if(user.username == username)
                {
                    if(user.password == password)
                    {
                        return Ok(user);
                    }
                    else
                    {
                        return NotFound();
                    }
                    break;
                }
            }
            return NotFound();
        }
        // DELETE: api/User/5
        [Route("api/user/{name}")]
        public IHttpActionResult Delete(string name)
        {
            List<User> user_list = getUserList();
            User user = user_list.FirstOrDefault((p) => p.username == name);
            user_list.Remove(user);
            writeUserList(user_list);
            return Ok(getUserList());
        }


        private void writeUserList(List<User> users)
        {
            var json = new JavaScriptSerializer().Serialize(users);
            var base_path = System.IO.Path.GetTempPath();
            string path = base_path + "users.txt";

            // This text is added only once to the file.
            File.WriteAllText(path, json);
        }

        private List<User> getUserList()
        {
            try {
                var path = System.IO.Path.GetTempPath() + "users.txt";
                var json = File.ReadAllText(path);
                List<User> users = new JavaScriptSerializer().Deserialize<List<User>>(json);
                return users;
            }
            catch(Exception e)
            {
                return new List<User>();
            }
        }

    }
}
