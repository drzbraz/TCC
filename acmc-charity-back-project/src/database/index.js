import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import Admin from '../app/models/Admin.js';
import Patient from '../app/models/Patient.js';
import Doctor from '../app/models/Doctor.js';
import Appointment from '../app/models/Appointment.js';

const connection = new Sequelize(databaseConfig);
Admin.init(connection);
Patient.init(connection);
Doctor.init(connection);
Appointment.init(connection);

Appointment.associate(connection.models);
Patient.associate(connection.models);
Doctor.associate(connection.models);

export default connection;
