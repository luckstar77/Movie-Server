'use strict';
// had enabled by egg
// exports.static = true;

exports.validate = {
  package: 'egg-validate',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.mailgun = {
  enable: true,
  package: 'egg-mailgun',
};
