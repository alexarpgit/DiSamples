using System;
using System.Collections.Generic;
using System.Linq;
using DataAccessLayer.Interfaces;
using EntityLayer.Models;

namespace DataAccessLayer.Repos
{
    public class MemoryBaseRepo<T> : IBaseRepo<T> where T:Entity
    {
        private long _nextId = 1;

        private readonly List<T> _entityList = new List<T>();

        public T Load(long id)
        {
            var entity = _entityList.FirstOrDefault(e => e.Id == id);
            return entity ;
        }

        public T Load(Guid uid)
        {
            var entity = _entityList.FirstOrDefault(e => e.Uid == uid);
            return entity;
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            var clients = _entityList.Where(predicate);
            return clients;
        }

        public long Add(T entity)
        {
            return Add(entity, true);
        }

        long Add(T entity, bool isNew)
        {
            if (IsExists(entity.Id))
                return 0;

            if (isNew)
            {
                entity.Id = _nextId;
                entity.Uid = Guid.NewGuid();
                _nextId++;
            }

            _entityList.Add(entity);
            return entity.Id;
        }

        public bool Update(T entity)
        {
            var currentEntity = Load(entity.Id);

            if (currentEntity == null)
                return false;

            entity.Id = currentEntity.Id;
            entity.Uid = currentEntity.Uid;

            Delete(currentEntity);
            Add(entity, false);

            return true;
        }

        public bool Delete(T entity)
        {
            var currentEntity = Load(entity.Id);

            if (currentEntity == null)
                return false;
            
            _entityList.Remove(currentEntity);
            return true;
        }

        public bool IsExists(long id)
        {
            var res = _entityList.Exists(e => e.Id == id);
            return res;
        }
    }
}
