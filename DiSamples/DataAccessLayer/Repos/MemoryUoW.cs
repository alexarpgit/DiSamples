using DataAccessLayer.Interfaces;
using EntityLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repos
{
    public class MemoryUoW : IUnitOfWork
    {
        MemoryBaseRepo<Client> _clients;
        MemoryBaseRepo<User> _users;

        public MemoryUoW()
        {
            for (int i = 1; i <= 100; i++)
            {
                var num = i.ToString("D3");
                Clients.Add(new Client { INN = "1000000" + num, Name = "Клиент " + num});
            }            

            Users.Add(new User { Login = "admin", Name = "Администратор", Password = "111" });
            Users.Add(new User { Login = "manager", Name = "Менеджер", Password = "222" });
        }

        public IBaseRepo<Client> Clients
        {
            get
            {
                if (_clients == null)
                    _clients = new MemoryBaseRepo<Client>();
                return _clients;
            }
        }             

        public IBaseRepo<User> Users
        {
            get
            {
                if (_users == null)
                    _users = new MemoryBaseRepo<User>();
                return _users;
            }
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
