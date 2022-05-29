const express = require("express");
// *** ADD ***
const v1AddressBookRouter = require("./v1/routes/AddressBookroutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// *** REMOVE ***
// *** ADD ***
app.use(bodyParser.json());
app.use("/api/v1/AddressBook", v1AddressBookRouter);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});