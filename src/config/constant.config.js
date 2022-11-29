import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 5000;
export const { SENDGRID_API_KEY, SENDGRID_NAME, SENDGRID_EMAIL } = process.env;
export const morganLogFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

export default {
  env,
  port,
  morganLogFormat,
};
