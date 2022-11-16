import Appointment from '../models/Appointment.js';
import Patient from '../models/Patient.js';
import Doctor from '../models/Doctor.js';
import * as Yup from 'yup';

import Sequelize from 'sequelize';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      patient_id: Yup.number().required(),
      doctor_id: Yup.number().required(),
      date: Yup.string().required(),
      diagnoses: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Appointment.findOne({
      where: {
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        date: req.body.date,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Appointment already exists.' });
    }

    const { patient_id, doctor_id, date } = await Appointment.create(req.body);
    res.json({ patient_id, doctor_id, date });
  }

  async delete(req, res) {
    const { appointmentId } = req.body;

    if (!appointmentId) {
      return res.status(400).json({ error: 'Validation fails, need user id' });
    }

    const condition = { where: { id: appointmentId } };

    const { name } = await Appointment.destroy(condition);
    res.json({ name });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      patient_id: Yup.number().required(),
      doctor_id: Yup.number().required(),
      date: Yup.string().required(),
      diagnoses: Yup.string().required(),
      appointmentId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const condition = { where: { id: req.body.appointmentId } };
    const options = { multi: true };

    await Appointment.update(
      { date: req.body.date, diagnoses: req.body.diagnoses },
      condition,
      options
    );
    return res.json();
  }
  async get(req, res) {
    const schema = Yup.object().shape({
      appointmentId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await Appointment.findOne({
      where: { id: req.body.appointmentId },
    });

    if (!user) {
      return res.status(401).json({ error: 'Appointment not found' });
    }
    const patient = await Patient.findOne({
      where: { id: user.patient_id },
    });

    if (!patient) {
      return res.status(401).json({ error: 'Patient not found' });
    }

    const doctor = await Doctor.findOne({
      where: { id: user.doctor_id },
    });

    if (!doctor) {
      return res.status(401).json({ error: 'Doctor not found' });
    }

    return res.json({ user, patient, doctor });
  }

  async getAll(req, res) {
    const schema = Yup.object().shape({
      offset: Yup.number().required(),
      limit: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const users = await Appointment.findAll({
      offset: req.body.offset,
      limit: req.body.limit,
      include: [{ association: 'patient' }, { association: 'doctor' }],
    });

    if (!users) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(users);
  }

  async getByName(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const Op = Sequelize.Op;

    const users = await Appointment.findAll({
      include: [
        {
          association: 'patient',
          model: Patient,
          where: { name: { [Op.like]: `%${req.query.name}%` } },
          attributes: ['name'],
        },
        {
          association: 'doctor',
          model: Doctor,
          attributes: ['name'],
        },
      ],
      limit: 5,
      raw: true,
    });

    if (!users) {
      return res.status(401).json({ error: 'User not found' });
    }

    return res.json(users);
  }
}

export default new AppointmentController();
