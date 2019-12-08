using DataAccessLayer.Repos;
using Ninject.Modules;

namespace Core
{
    public class MemoryConfigModule : NinjectModule
    {
        public override void Load()
        {
            Bind(typeof(IBaseRepo<>)).To(typeof(MemoryBaseRepo<>)).InSingletonScope();
        }
    }
}
