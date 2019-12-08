using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.DTO
{
    public class ClientListViewDTO
    {
        public List<ClientViewDTO> ClientViewItems { get; set; }

        public ClientLogic.ClientFilter Filter { get; set; }

        public int Page { get; set; }

        public int PagesCount { get; set; }

        public int ItemsCount { get; set; }

    }
}
