import multer from 'multer';
import crypto from 'crypto';
import path, { extname, resolve } from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default {
  storage: multer.diskStorage({
    destination: resolve(
      path.dirname(__filename),
      '..',
      '..',
      'tmp',
      'uploads'
    ),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
