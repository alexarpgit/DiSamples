using System;
using BusinessLogicLayer;
using BusinessLogicLayer.DTO;
using DataAccessLayer.Interfaces;
using EntityLayer.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Ninject;

namespace DiSamplesTests
{
    [TestClass()]
    public class ClientLogicTests
    {
        
        [TestMethod()]
        public void GetClientTest()
        {
            var response = new Client
            {
                Id = 1,
                INN = "1111111111",
                Name = "Mocked client",
                Uid = Guid.NewGuid()
            };

            var mockUow = new Mock<IUnitOfWork>();
            mockUow.Setup(m => m.Clients.Load(It.IsAny<long>())).Returns(response);

            var logic = new BusinessLogicLayer.ClientLogic.ClientLogic(mockUow.Object);
            var client = logic.GetClient(0);

            Assert.AreEqual(client.Id,  response.Id);
            Assert.AreEqual(client.Name, response.Name);
            Assert.AreEqual(client.INN, response.INN);

            mockUow.Verify(m=>m.Clients.Load(It.IsAny<long>()), Times.Once);            
        }

        [TestMethod]
        public void GetClientListViewTest()
        {
            var filter = new BusinessLogicLayer.ClientLogic.ClientFilter
            {
                ItemsOnPage = 12,
                Page = 3,
                Descending = true
            };

            var uow = new DataAccessLayer.Repos.MemoryUoW();
            var logic = new BusinessLogicLayer.ClientLogic.ClientLogic(uow);
            var result = logic.GetClientListView(filter);

        }
    }
}