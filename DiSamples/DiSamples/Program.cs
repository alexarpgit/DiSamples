using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using BusinessLogicLayer;
using WebApi;
using EntityLayer;

namespace DiSamples
{
    class Program
    {
        static void Main(string[] args)
        {
            var ent = new EntityLayer.Models.User();
            var ass = AppDomain.CurrentDomain.GetAssemblies(); //.Where(a => a.FullName.Contains("EntityLayer"));
            List<Type> types = new List<Type>();
            foreach (var a in ass)
            {
                types.AddRange(a.GetTypes().Where(t => t.BaseType == typeof(EntityLayer.Models.Entity)));
            }
        }
    }
}
