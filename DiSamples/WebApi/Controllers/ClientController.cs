using BusinessLogicLayer.ClientLogic;
using BusinessLogicLayer.DTO;
using System.Collections.Generic;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class ClientController : ApiController
    {
        private readonly IClientLogic _logic;

        public ClientController(IClientLogic logic)
        {
            _logic = logic;
        }

        // GET api/<controller>
        
        

        public ClientListViewDTO Get()
        {
            return _logic.GetClientListView(null);
        }

        // GET api/<controller>/5
        public ClientDTO Get(long id)
        {
            return _logic.GetClient(id);
        }

        [HttpPost]
        public ClientListViewDTO GetClientListByFilter([FromBody]ClientFilter filter)
        {
            return _logic.GetClientListView(filter);
        }

        // POST api/<controller>
        public long Post([FromBody]ClientDTO client)
        {
            return _logic.CreateClient(client);
        }

        // PUT api/<controller>/5
        public bool Put(int id, [FromBody]ClientDTO client)
        {
            return _logic.UpdateClient(id, client);
        }

        // DELETE api/<controller>/5
        public bool Delete(int id)
        {
            return _logic.DeleteClient(id);
        }
    }
}