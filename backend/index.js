const express = require("express");
const PORT = 4000;
const validationRoute = require("./routes/validation");
const cors = require("cors");

app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/api/validation", validationRoute);

app.all("*", (req, res) => {
  res.status(404).send("Error 404! Page not found!");
});

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
