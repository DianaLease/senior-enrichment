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


module.exports = Campus;
