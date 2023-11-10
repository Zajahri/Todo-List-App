import React from "react";
import Card from './Card'
 
import contacts from './contacts'

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

    {
    contacts.map(contact => {
         return (
            <Card 
                name={contact.name} 
                img={contact.imgURL}
                tel={contact.phone} 
                email={contact.email}
                gender={contact.gender}
            />
         )
    })
    }

      {/* <Card 
        name={contacts[0].name} 
        img={contacts[0].imgURL}
        tel={contacts[0].phone} 
        email={contacts[0].email}
        gender={contacts[0].gender}
      />

      <Card 
        name={contacts[1].name} 
        img={contacts[1].imgURL}
        tel={contacts[1].phone} 
        email={contacts[1].email}
        gender={contacts[1].gender}
      />

      <Card 
        name={contacts[2].name} 
        img={contacts[2].imgURL}
        tel={contacts[2].phone} 
        email={contacts[2].email}
        gender={contacts[2].gender}
      /> */}
     
    </div>
  );
}

export default App;