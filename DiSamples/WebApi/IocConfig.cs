using BusinessLogicLayer.ClientLogic;
using Ninject.Modules;

namespace WebApi.IoC
{
    public class IocConfig : NinjectModule
    {
        public override void Load()
        {
            Bind<IClientLogic>().To<ClientLogic>();
        }
    }
}
