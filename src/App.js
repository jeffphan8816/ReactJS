import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
      </header>
    </div>
  );
}

export default App;
