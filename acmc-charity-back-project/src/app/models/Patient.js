import Sequelize from 'sequelize';
const { Model } = Sequelize;

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        phone: Sequelize.STRING,
        birthday: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        zipCode: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
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
      as: 'patient',
    });
  }
}
export default Patient;
