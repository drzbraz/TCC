import * as Yup from 'yup';
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';
import bcrypt from 'bcryptjs';

class AdminController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await Admin.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { name, email } = await Admin.create(req.body);
    return res.json({ name, email });
  }

  async auth(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await Admin.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async update(req, res) {
    const { email, oldPassword, password, userId } = req.body;

    const user = await Admin.findByPk(userId);
    if (email !== user.email) {
      const userExists = await Admin.findOne({ where: email });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const condition = { where: { id: userId } };

    const options = { multi: true };

    const newPassword = await bcrypt.hash(password, 8);

    const { id, name } = await Admin.update(
      { password_hash: newPassword },
      condition,
      options
    );

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new AdminController();
