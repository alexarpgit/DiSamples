using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.DTO
{
    public class ClientDTO : EntityDTO
    {
        public string Name { get; set; }

        public string INN { get; set; }
    }
}
