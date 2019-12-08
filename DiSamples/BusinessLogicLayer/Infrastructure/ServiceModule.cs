﻿using DataAccessLayer.Interfaces;
using DataAccessLayer.Repos;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Infrastructure
{
    public class ServiceModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IUnitOfWork>().To<MemoryUoW>().InSingletonScope();
        }
    }
}
