using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject;

namespace Core
{
    public class Core
    {
        public static void SetUp()
        {
            NinjectContext.SetUp(new MemoryConfigModule());

        }
    }
}
