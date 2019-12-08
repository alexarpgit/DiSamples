using BusinessLogicLayer;
using DataAccessLayer.Repos;
using EntityLayer.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace DiSamplesTests
{
    [TestClass()]
    public class BusinessLogicTests
    {
        public BusinessLogicTests()
        {
            NinjectContext.SetUp(new TestConfigModule());
        }

        [TestMethod()]
        public void GetClientTest()
        {
            var mockRepoClient = new Mock<IBaseRepo<Client>>();
            NinjectContext.Kernel.Bind<IBaseRepo<Client>>().ToConstant(mockRepoClient.Object).InSingletonScope();

            var response = new Client
            {
                Id = 5,
                Name = "Mocked client",
                INN = "****"
            };

            mockRepoClient.Setup(m => m.Load(It.IsAny<long>())).Returns(response);

            var logic = new BusinessLogic();
            var client = logic.GetClient(0);

            Assert.AreEqual(client.Id,  response.Id);
            Assert.AreEqual(client.Name, response.Name);
            Assert.AreEqual(client.INN, response.INN);

            mockRepoClient.Verify(m=>m.Load(It.IsAny<long>()), Times.Once);
            
        }
    }
}