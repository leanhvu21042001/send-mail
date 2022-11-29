const { Joi } = require('express-validation');

const sendMail = {
  body: Joi.object({
    to: Joi.string().email().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    // csv: Joi.required(),
  }),
};

export default sendMail;
