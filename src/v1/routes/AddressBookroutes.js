const express = require("express");
const AddressBookController = require("../../controllers/AddressBookcontrollers");

const router = express.Router();

router.get("/", AddressBookController.getAllAddressBooks);

router.get("/:AddressBookId", AddressBookController.getOneAddressBook);

router.post("/", AddressBookController.createNewAddressBook);

router.post("/bulk", AddressBookController.createBulkNewAddressBook);

router.patch("/:AddressBookId", AddressBookController.updateOneAddressBook);

router.delete("/:AddressBookId", AddressBookController.deleteOneAddressBook);

module.exports = router;