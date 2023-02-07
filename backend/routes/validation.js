const express = require("express");
const router = express.Router();
const formValidation = require("../formValidation");

router.post("/", async (req, res) => {
  //check schema error
  const { error } = formValidation(req.body);

  let customErrors = {
    Name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: "",
  };

  if (error) {
    error.details.forEach((e) => {
      const label = e.context.label;
      customErrors[label] = e.message;
    });
    return res.status(400).send({ message: customErrors });
  }
  return res.send("Form submitted");
});

module.exports = router;
