import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

function App() {

  const [user, setUser] = useState();

  async function requestUser() {
    await axios.get('https://reqres.in/api/users?page=1')
      .then(response =>{
        setUser(response);
      })
  };

  return (
    <div className="App">
      <Navbar func = {requestUser}/>
      <Cards userData = {user}/>
    </div>
  );
}

export default App;
