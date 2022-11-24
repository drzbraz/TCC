import Patient from '../models/Patient.js';
import * as Yup from 'yup';

import Sequelize from 'sequelize';

class PatientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string().required(),
      birthday: Yup.string().required(),
      street: Yup.string().required(),
      zipCode: Yup.string().required(),
      neighborhood: Yup.string().required(),
      number: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Patient.findOne({ where: { cpf: req.body.cpf } });

    if (userExists) {
      return res.status(400).json({ error: 'Patient already exists.' });
    }

    const { name } = await Patient.create(req.body);
    res.json({ name });
  }

  async delete(req, res) {
    const { patientId } = req.query;

    if (!patientId) {
      return res.status(400).json({ error: 'Validation fails, need user id' });
    }

    const condition = { where: { id: patientId } };
    await Patient.destroy(condition);
    res.json();
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string().required(),
      birthday: Yup.string().required(),
      street: Yup.string().required(),
      zipCode: Yup.string().required(),
      neighborhood: Yup.string().required(),
      number: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      userId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const condition = { where: { id: req.body.userId } };
    const options = { multi: true };

    await Patient.update(req.body, condition, options);
    return res.json();
  }
  async get(req, res) {
    console.log(req.query);
    const schema = Yup.object().shape({
      patientId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await Patient.findOne({ where: { id: req.query.patientId } });

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
    const users = await Patient.findAll({
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
      const users = await Patient.findAll({
        offset: req.query.offset,
        limit: req.query.limit,
      });
      return res.json(users);
    }

    const users = await Patient.findAll({
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

export default new PatientController();
