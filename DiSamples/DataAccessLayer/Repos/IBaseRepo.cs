using System;
using System.Collections.Generic;
using EntityLayer.Models;

namespace DataAccessLayer.Repos
{
    public interface IBaseRepo<TEntity> where TEntity: IEntity

    {
    TEntity Load(long id);

    TEntity Load(Guid uid);

    IEnumerable<TEntity> Find(Func<TEntity, bool> predicate);

    long Add(TEntity entity);

    bool Update(TEntity entity);

    bool Delete(TEntity entity);

    bool IsExists(long id);
    }
}
