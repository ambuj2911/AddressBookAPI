// In src/controllers/AddressBookController.js
const AddressBookService = require("../services/AddressBookservices");

const getAllAddressBooks = (req, res) => {
  const allAddressBooks = AddressBookService.getAllAddressBooks();
  res.send({ status: "OK", data: allAddressBooks });
};

const getOneAddressBook = (req, res) => {
  const {
    params: { AddressBookId },
  } = req;
  if (!AddressBookId) {
    return;
  }
  try
  {
  const AddressBook = AddressBookService.getOneAddressBook(AddressBookId);
  res.send({ status: "OK", data: AddressBook });
  }catch (error) {
    res.send({data: error});
  }

};

const createNewAddressBook = (req, res) => {
  const { body } = req;
  if (
    !body.Name ||
    !body.Address ||
    !body.Contact
  ) {
    res.send({status: "400" ,data: "One of the field is missing"});
  }
  const newAddressBook = {
    Name: body.Name,
    Address: body.Address,
    Contact: body.Contact
  };
  try
  {
    const createdAddressBook = AddressBookService.createNewAddressBook(newAddressBook);
    res.status(201).send({ status: "OK", data: createdAddressBook });
  }catch (error) {
    res.send({data: error});
  }
  
};

const createBulkNewAddressBook = (req, res) => {
  const { body } = req;
  for(let i = 0; i < body.test.length; i++)
  {
    if (
      !body.test[i].Name ||
      !body.test[i].Address ||
      !body.test[i].Contact
    ) {
      res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: name, Address, Contact",
        },
      });
      return;
    }
    const newAddressBook = {
      Name: body.test[i].Name,
      Address: body.test[i].Address,
      Contact: body.test[i].Contact
    };
    
    try
    {
      const createdAddressBook = AddressBookService.createNewAddressBook(newAddressBook);
    }catch (error) {
      res.send({data: error});
    }
    

  }
  res.status(201).send({ status: "OK" });
  
};

const updateOneAddressBook = (req, res) => {
  const {
    body,
    params: { AddressBookId },
  } = req;
  if (!AddressBookId) {
    return;
  }
  //console.log(body);
  try
  {
    const updatedAddressBook = AddressBookService.updateOneAddressBook(AddressBookId, body);
    res.send({ status: "OK", data: updatedAddressBook });
  }catch (error) {
    res.send({data: error});
  }
  
};

const deleteOneAddressBook = (req, res) => {
  const {
    params: { AddressBookId },
  } = req;
  if (!AddressBookId) {
    res.send({data: "Enter a valid ID!"});
    return;
  }
  try
  {
    AddressBookService.deleteOneAddressBook(AddressBookId);
    res.status(204).send({ status: "OK" });
  }catch (error) {
    res.send({data: error});
  }
 
};

module.exports = {
  getAllAddressBooks,
  getOneAddressBook,
  createNewAddressBook,
  updateOneAddressBook,
  deleteOneAddressBook,
  createBulkNewAddressBook
};