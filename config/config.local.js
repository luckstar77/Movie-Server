'use strict';

module.exports = () => {
  const config = exports = {};

  config.logger = {
    consoleLevel: 'DEBUG',
    disableConsoleAfterReady: false,
  };


  return config;
};
