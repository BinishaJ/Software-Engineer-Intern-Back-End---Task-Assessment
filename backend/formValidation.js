const Joi = require("@hapi/joi");

const formValidation = (data) => {
  const schema = Joi.object({
    Name: Joi.string().required().min(5).messages({
      "string.min": "Name must be atleast 5 characters!",
      "string.empty": "Name is required!",
      "string.required": "Name is required!",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Enter a valid email!",
      "string.empty": "Email is required!",
      "string.required": "Email is required!",
    }),
    phone: Joi.number().required().messages({
      "number.base": "Phone must be a number!",
      "number.empty": "Phone is required!",
      "number.required": "Phone is required!",
    }),
    gender: Joi.string().valid("Male", "Female", "Others").required().messages({
      "string.required": "Gender is required!",
      "string.empty": "Gender is required!",
      "string.only": "Invalid Option",
    }),
    hobbies: Joi.array()
      .items(
        Joi.string().valid(
          "Reading",
          "Traveling",
          "Listening to music",
          "Playing Sports"
        )
      )
      .min(1)
      .required()
      .messages({
        "string.base": "Invalid Option",
        "string.required": "Hobbies is required!",
        "string.empty": "Hobbies is required!",
        "array.min": "Hobbies is required!",
        "string.only": "Invalid Option",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

module.exports = formValidation;
