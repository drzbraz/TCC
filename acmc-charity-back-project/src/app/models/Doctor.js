import Sequelize from 'sequelize';
const { Model } = Sequelize;

class Doctor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        phone: Sequelize.STRING,
        birthday: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Appointment, {
      foreignKey: 'id',
      as: 'doctor',
    });
  }
}
export default Doctor;
