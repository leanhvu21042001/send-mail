import { SENDGRID_EMAIL, SENDGRID_NAME } from '@/config/constant.config';
import { sendEmail } from '@/services/mail';

export const send = async (req, res) => {
  const { title, body, to } = req.body;
  const buffer = req?.file?.buffer;
  const originalname = req?.file?.originalname;

  const message = {
    to,
    subject: title,
    from: {
      name: SENDGRID_NAME,
      email: SENDGRID_EMAIL,
    },
    replyTo: {
      name: SENDGRID_NAME,
      email: SENDGRID_EMAIL,
    },
    content: [
      {
        type: 'text/html',
        value: body,
      },
    ],
  };

  if (originalname) {
    message.attachments = [
      {
        content: buffer.toString('base64'),
        filename: originalname,
      },
    ];
  }

  try {
    await sendEmail(message);
    return res.sendStatus(202);
  } catch (e) {
    return res.sendStatus(500);
  }
};
