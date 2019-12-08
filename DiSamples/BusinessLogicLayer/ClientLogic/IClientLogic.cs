using System.Collections.Generic;
using BusinessLogicLayer.DTO;

namespace BusinessLogicLayer.ClientLogic
{
    public interface IClientLogic
    {
        long CreateClient(ClientDTO clientDto);
        bool DeleteClient(long clientId);
        ClientDTO GetClient(long id);
        ClientListViewDTO GetClientListView(ClientFilter filter);
        bool UpdateClient(long clientId, ClientDTO clientDto);
    }
}