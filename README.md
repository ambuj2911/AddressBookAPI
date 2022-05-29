# AddressBookAPI
Designed an Address-Book API using Node and Express. 
In order to run take command prompt to src directory and execute npm run dev
localhost url is http://localhost:3000/api/v1/AddressBook/ ;(here 3000 is port number)

In Order to get data stored in database use GET http://localhost:3000/api/v1/AddressBook/
In order to get information regarding a specific contact use GET http://localhost:3000/api/v1/AddressBook/"ID"("ID" append ID of contact);
        ID of a contact is appended automatically by system in order to get ID of particular contact can see in db.json.
        
In order to add a new contact POST http://localhost:3000/api/v1/AddressBook/
    and in body pass json containing details.
    A contact must have 3 things Name, Address, Contact (Naming must be followed)
    example.json
    {
        "Name": "xvg",
        "Address" : "sjagfjsf",
        "Contact": "8666666666"
    }
To add bulk contacts use POST http://localhost:3000/api/v1/AddressBook/bulk
    and in body pass json conataining a list of contacts
    {
        "test":[
            {
                "Name": "xvg",
                "Address" : "sjagfjsf",
                "Contact": "8666666666"
            },
            {
                "Name": "xvgssf",
                "Address" : "sjagfjsfkjkf",
                "Contact": "8666666666888"
            }
            
        ]
    }

TO update a particular contact use PATCH  http://localhost:3000/api/v1/AddressBook/"ID" ("ID" append ID of contact)

TO delete a particular contact use DELETE  http://localhost:3000/api/v1/AddressBook/"ID" ("ID" append ID of contact)
