import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('./../../../config/config.json')[env];

let sequelize: Sequelize.Sequelize;
sequelize = new Sequelize.Sequelize(config.database, config.username, config.password, config);

export default sequelize;