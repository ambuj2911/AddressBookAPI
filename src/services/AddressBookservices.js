// In src/services/AddressBookServices.js
const { v4: uuid } = require("uuid");
const AddressBook = require("../database/AddressBook");

const getAllAddressBooks = () => {
  const allAddressBooks = AddressBook.getAllAddressBooks();
  return allAddressBooks;
};

const getOneAddressBook = (AddressBookId) => {
  try
  {
    const AddressBook1 = AddressBook.getOneAddressBook(AddressBookId);
    return AddressBook1;
  }catch (error) {
    throw error;
  }
  
};

const createNewAddressBook = (newAddressBook) => {
  //console.log(newAddressBook);
  const AddressBookToInsert = {
    ...newAddressBook,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  //console.log(AddressBookToInsert);
  try
  {
    const createdAddressBook = AddressBook.createNewAddressBook(AddressBookToInsert);
    return createdAddressBook;
  }catch (error) {
    throw error;
  }
  
};

const updateOneAddressBook = (AddressBookId, changes) => {
  try
  {
    const updatedAddressBook = AddressBook.updateOneAddressBook(AddressBookId, changes);
    return updatedAddressBook;
  }catch (error) {
    throw error;
  }
  
};

const deleteOneAddressBook = (AddressBookId) => {
  try
  {
    const temp = AddressBook.deleteOneAddressBook(AddressBookId);
    return temp;
  }catch (error) {
    throw error;
  }
  
};

module.exports = {
  getAllAddressBooks,
  getOneAddressBook,
  createNewAddressBook,
  updateOneAddressBook,
  deleteOneAddressBook,
};