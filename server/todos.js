const uuid = require('uuid-v4');

const items = new Map();

module.exports = {
      add(item) {
          item.id = uuid();
          items.set(item.id, item);
      },
      remove(id) {
          items.delete(id);
      },
      list() {
          return Array.from(items.values());
      }
};
