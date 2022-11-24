import Doctor from '../models/Doctor.js';
import * as Yup from 'yup';

import Sequelize from 'sequelize';

class DoctorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string(),
      birthday: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Doctor.findOne({ where: { cpf: req.body.cpf } });

    if (userExists) {
      return res.status(400).json({ error: 'Doctor already exists.' });
    }

    const { name } = await Doctor.create(req.body);
    res.json({ name });
  }

  async delete(req, res) {
    const { doctorId } = req.query;

    if (!doctorId) {
      return res.status(400).json({ error: 'Validation fails, need user id' });
    }

    const condition = { where: { id: doctorId } };

    await Doctor.destroy(condition);
    res.json();
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string(),
      birthday: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const condition = { where: { id: req.body.userId } };
    const options = { multi: true };

    await Doctor.update(req.body, condition, options);
    return res.json();
  }
  async get(req, res) {
    const schema = Yup.object().shape({
      doctorId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await Doctor.findOne({
      where: { id: req.query.doctorId },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(user);
  }

  async getAll(req, res) {
    const schema = Yup.object().shape({
      offset: Yup.number().required(),
      limit: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const users = await Doctor.findAll({
      offset: req.query.offset,
      limit: req.query.limit,
    });

    if (!users) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(users);
  }

  async getByName(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const Op = Sequelize.Op;
    if (req.query.name === '') {
      const users = await Doctor.findAll({
        offset: req.query.offset,
        limit: req.query.limit,
      });
      return res.json(users);
    }

    const users = await Doctor.findAll({
      where: {
        name: { [Op.like]: `%${req.query.name}%` },
      },
      limit: 5,
      raw: true,
    });

    if (!users) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(users);
  }
}

export default new DoctorController();
