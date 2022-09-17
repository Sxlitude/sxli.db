const phin = require('phin');

class Database {
  constructor(url) {
    if (url) this.url = url;
    else this.url = 'https://httpServer.grvcdz.repl.co';
  }

  /* Set a key */
  async set(key, value) {
    if (key && value) {
      const res = await phin({
        method: 'POST',
        parse: 'json',
        url: `${this.url}/set`,
        data: {
          key: key,
          value: value
        }
      });
      if (res.body.done) return true;
      else return null;
    }
  }

  /* Get a key */
  async get(key) {
    if (key) {
      const res = await phin({
        method: 'GET',
        parse: 'json',
        url: `${this.url}/get`,
        data: {
          key: key
        }
      }); return res.body.value;
    }
  }

  /* Delete a key */
  async delete(key) {
    if (key) {
      const res = await phin({
        method: 'DELETE',
        parse: 'json',
        url: `${this.url}/delete`,
        data: {
          key: key
        }
      }); return res.body.value;
    }
  }

  /* Show values by prefix */
  async list(prefix) {
    if (prefix) {
      const res = await phin({
        method: 'GET',
        parse: 'json',
        url: `${this.url}/list`,
        data: {
          prefix: prefix
        }
      }); return res.body.result;
    }
  }
};

module.exports = Database;