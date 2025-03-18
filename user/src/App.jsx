import { useState, useEffect } from 'react'

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    async function fetchContacts() {
      try{
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
    }
    }
    fetcgContacts();
  },[])

  return (
    <>
      <div>
        <h1>Contact List</h1>
        <ul>
          {users.map(user =>(
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
