const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://etadigital.files.wordpress.com/2012/05/apples-space-centre.jpg',
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

Campus.beforeValidate((campusInstance, optionsObj) => {
  if (!campusInstance.imgUrl) campusInstance.imgUrl = 'https://etadigital.files.wordpress.com/2012/05/apples-space-centre.jpg'
})


module.exports = Campus;
