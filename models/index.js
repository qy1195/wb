var fs = require('fs'),
  path = require('path'),
  moment = require('moment'),
  Sequelize = require('sequelize'),
  lodash = require('lodash'),
  sequelize = new Sequelize('qiying', 'timeman', 'makewonder', {
    host: '182.92.164.133',
    port: '3306',
    dialect: 'mysql',
    define: {
      underscored: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    timezone: '+08:00'
  }),
  db = {};


// 把所有model存在db中
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].options.hasOwnProperty('associate')) {
    db[modelName].options.associate(db)
  }
})


// 为db添加sequelize和Sequelize 属性
module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)
