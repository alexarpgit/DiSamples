using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccessLayer;
using DataAccessLayer.Repos;
using EntityLayer.Models;
using Ninject;

namespace BusinessLogicLayer
{
    public class BusinessLogic
    {
        static int runnedTasks = 0;       

        public int RunScheduledJob(Guid id)
        {
            return runnedTasks++;
        }
    }
}
