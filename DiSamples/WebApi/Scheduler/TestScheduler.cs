using BusinessLogicLayer.ClientLogic;
using Ninject;
using Quartz;
using Quartz.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Scheduler
{
    public class TestScheduler
    {
        public static async void Start()
        {
            IScheduler scheduler = await StdSchedulerFactory.GetDefaultScheduler();
            await scheduler.Start();

            IJobDetail job = JobBuilder.Create<TestJob>().Build();
            ITrigger trigger = TriggerBuilder.Create()
                .WithIdentity("testTrigger", "testGroup")
                .StartNow()
                .WithSimpleSchedule(x => x.WithIntervalInSeconds(10).WithRepeatCount(1))
                .Build();

            await scheduler.ScheduleJob(job, trigger);
        }
        
    }
}