using DataAccessLayer.Repos;
using Ninject.Modules;

namespace DiSamples
{
    public class MemoryConfigModule : NinjectModule
    {
        public override void Load()
        {
            Bind(typeof(DataAccessLayer.Interfaces.IBaseRepo<>)).To(typeof(MemoryBaseRepo<>)).InSingletonScope();
        }
    }
}
