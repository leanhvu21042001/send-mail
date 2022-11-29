import { Router } from 'express';
import { validate } from 'express-validation';
import { send } from '@/controllers/mail.controller';
import { uploadCSV } from '@/middlewares/upload.middleware';
import sendMail from '@/validations/sendMail';

const router = Router();

// GET /api/mail/send
router.post('/send', uploadCSV(), validate(sendMail), send);

export default router;
