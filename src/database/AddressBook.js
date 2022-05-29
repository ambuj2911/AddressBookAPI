const DB = require("./db.json");
const { saveToDatabase } = require("./utils");


const getAllAddressBooks = () => {
  return DB.AddressBooks;
};

const getOneAddressBook = (AddressBookId) => {
  const AddressBook = DB.AddressBooks.find((AddressBook1) => AddressBook1.id === AddressBookId);
  if (!AddressBook) {
    throw {
      status: 400,
      message: `Workout with the Name '${newAddressBook.Name}' already exists`,
    };
    return;
  }
  return AddressBook;
};



const createNewAddressBook = (newAddressBook) => {
  const isAlreadyAdded =
    DB.AddressBooks.findIndex((workout) => workout.Name === newAddressBook.Name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the Name '${newAddressBook.Name}' already exists`,
    };
  }
  try {
    DB.AddressBooks.push(newAddressBook);
    saveToDatabase(DB);
    return newAddressBook;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneAddressBook = (AddressBookId, changes) => {
  const indexForUpdate = DB.AddressBooks.findIndex(
    (AddressBook1) => AddressBook1.id === AddressBookId
  );
  if (indexForUpdate === -1) {
    throw {
      status: 400,
      message: `Workout with the ID '${AddressBookId}' doesn't exists`,
    };
  }
  try
  {
    const updatedAddressBook = {
      ...DB.AddressBooks[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.AddressBooks[indexForUpdate] = updatedAddressBook;
    saveToDatabase(DB);
    return updatedAddressBook;
  }catch (error) {
    throw { status: 500, message: error?.message || error };
  }
  
};

const deleteOneAddressBook = (AddressBookId) => {
  const indexForDeletion = DB.AddressBooks.findIndex(
    (AddressBook) => AddressBook.id === AddressBookId
  );
  if (indexForDeletion === -1) {
    throw {
      status: 400,
      message: `Workout with the ID '${AddressBookId}' doesn't exists`,
    };
  }
  try
  {
    DB.AddressBooks.splice(indexForDeletion, 1);
    saveToDatabase(DB);
    return "Success!!";
  }catch (error) {
    throw { status: 500, message: error?.message || error };
  }
  
};

module.exports = {
  getAllAddressBooks,
  createNewAddressBook,
  getOneAddressBook,
  updateOneAddressBook,
  deleteOneAddressBook,
};