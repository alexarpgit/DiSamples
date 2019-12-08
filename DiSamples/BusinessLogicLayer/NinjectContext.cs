using DataAccessLayer.Repos;
using EntityLayer.Models;
using Ninject;
using Ninject.Modules;

namespace BusinessLogicLayer
{
    public static class NinjectContext
    {
        public static IKernel Kernel { get; private set; }

        public static void SetUp(params INinjectModule[] modules)
        {
            Kernel = new StandardKernel(modules);
        }
    }
}
