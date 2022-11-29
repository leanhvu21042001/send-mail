import sgMail from '@sendgrid/mail';

import { SENDGRID_API_KEY } from '@/config/constant.config';

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = (message) => sgMail.send(message);
