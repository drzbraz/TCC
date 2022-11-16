import Sequelize from 'sequelize';
const { Model } = Sequelize;

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        patient_id: Sequelize.NUMBER,
        doctor_id: Sequelize.NUMBER,
        date: Sequelize.STRING,
        diagnoses: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Patient, { foreignKey: 'id', as: 'patient' });
    this.hasMany(models.Doctor, { foreignKey: 'id', as: 'doctor' });
  }
}
export default Appointment;
