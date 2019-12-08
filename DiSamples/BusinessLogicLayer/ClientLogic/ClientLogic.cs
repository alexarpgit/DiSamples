using BusinessLogicLayer.DTO;
using DataAccessLayer.Interfaces;
using EntityLayer.Models;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLogicLayer.ClientLogic
{
    public class ClientLogic : IClientLogic
    {
        IUnitOfWork Database { get; set; }

        public ClientLogic(IUnitOfWork uow)
        {
            Database = uow;
        }

        public long CreateClient(ClientDTO clientDto)
        {
            var client = new Client
            {
                INN = clientDto.INN,
                Name = clientDto.Name
            };
            return Database.Clients.Add(client);
        }

        public ClientDTO GetClient(long id)
        {
            var client = Database.Clients.Load(id);
            if (client == null)
                return null;

            var clientDto = new ClientDTO
            {
                Id = client.Id,
                INN = client.INN,
                Name = client.Name,
                Uid = client.Uid
            };
            return clientDto;
        }

        public ClientListViewDTO GetClientListView(ClientFilter filter)
        {
            IQueryable<Client> query = Database.Clients.Find(c => true).AsQueryable();

            if(filter == null)
            {
                query =query.OrderBy(c => c.Id);
            }
            else
            {
                if(!string.IsNullOrWhiteSpace(filter.INN))
                    query = query.Where(c => c.INN.Contains(filter.INN.Trim()));

                if (!string.IsNullOrWhiteSpace(filter.Name))
                    query = query.Where(c => c.Name.ToUpperInvariant().Contains(filter.Name.Trim().ToUpperInvariant()));

                switch (filter.OrderField)
                {
                    case OrderField.INN:
                        query = filter.Descending ? query.OrderByDescending(c => c.INN) : query.OrderBy(c => c.INN);
                        break;

                    case OrderField.Name:
                        query = filter.Descending ? query.OrderByDescending(c => c.Name) : query.OrderBy(c => c.Name);
                        break;

                    default:
                        query = filter.Descending ? query.OrderByDescending(c => c.Id) : query.OrderBy(c => c.Id);
                        break;
                }                
            }

            var count = query.Count();

            var page = filter?.Page > 0 ? filter.Page : 1;
            var items = filter?.ItemsOnPage > 0 ? filter.ItemsOnPage : 5;            
            query = query.Skip((page - 1) * items).Take(items);

            var clientList = query.ToList();
            var result = new ClientListViewDTO
            {
                ClientViewItems = clientList.Select(c => new ClientViewDTO { Id = c.Id, INN = c.INN, Name = c.Name, Uid = c.Uid }).ToList(),
                Filter = filter,
                ItemsCount = count,
                Page = page,
                PagesCount = count / items + (count % items == 0 ? 0 : 1)               
            };            
            return result;
        }

        public bool DeleteClient(long clientId)
        {
            return Database.Clients.Delete(new Client { Id = clientId });
        }

        public bool UpdateClient(long clientId, ClientDTO clientDto)
        {
            var client = new Client
            {
                Id = clientId,
                INN = clientDto.INN,
                Name = clientDto.Name
            };
            return Database.Clients.Update(client);
        }
    }
}
