

const name = 'websocketServer';

function getInstance() {
  if (global[name]) {
    return global[name];
  }

  global[name] = init();
  return global[name];
}

function init() {
    
}

module.exports = getInstance();