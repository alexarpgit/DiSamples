using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.ClientLogic
{
    public enum OrderField
    {
        Name,
        INN,
        Id
    }

    public class ClientFilter
    {
        public int Page { get; set; }        

        public int ItemsOnPage { get; set; }

        public OrderField OrderField { get; set; }

        public bool Descending { get; set; }

        public string Name{ get; set; }

        public string INN { get; set; }       
    }
}
