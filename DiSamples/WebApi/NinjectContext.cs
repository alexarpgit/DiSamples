using Ninject;
using Ninject.Modules;

namespace WebApi
{
    public static class NinjectContext
    {
        public static IKernel Kernel { get; private set; }

        public static void SetUp(IKernel kernel)
        {
            Kernel = kernel;
        }

        public static void SetUp(params INinjectModule[] modules)
        {
            Kernel = new StandardKernel(modules);
        }
    }
}
