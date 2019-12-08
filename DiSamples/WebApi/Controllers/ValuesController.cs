using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogicLayer;
using EntityLayer.Models;
using Ninject;

namespace WebApi.Controllers
{
    public class ValuesController : ApiController
    {
        private BusinessLogic _logic = NinjectContext.Kernel.Get<BusinessLogic>();

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public Client Get(int id)
        {
            var client = _logic.GetClient(id);
            return client;
        }

        [HttpPost]
        public long CreateClient([FromBody]Client client)
        {
            return _logic.CreateClient(client);
        }

        [HttpPost]
        public long CreateFirstClient()
        {
            return _logic.AddClient1();
        }
    }
}
