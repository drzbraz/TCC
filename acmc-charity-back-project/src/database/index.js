import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

const connection = new Sequelize(databaseConfig);
export default connection;
