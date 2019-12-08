using BusinessLogicLayer;
using BusinessLogicLayer.ClientLogic;
using Ninject;
using Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Scheduler
{
    public class TestJob : IJob
    {
        public async Task Execute(IJobExecutionContext context)
        {
            await Task.Run(() => 
            {
                var logic = NinjectContext.Kernel.Get<IClientLogic>();
                var result = logic.GetClient(0);
            });
        }
    }
}
