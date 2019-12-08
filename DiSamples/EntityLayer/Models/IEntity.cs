using System;

namespace EntityLayer.Models
{
    public interface IEntity
    {
        long Id { get; set; }

        Guid Uid { get; set; }
    }
}
