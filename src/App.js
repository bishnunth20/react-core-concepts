import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
  const cinemas = [
    {nayok: 'koober', nayika: 'kopila'},
    {nayok: 'rubel', nayika: 'moushumi'},
    {nayok: 'razzak', nayika: 'shabana'}
  ];
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      <ul>
        {
          friends.map(friend => <li>{friend}</li>)
        }
      </ul>
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
      <Friend phone='0123' address='Chattogram'></Friend>
      <Friend phone='5678' address='Noakhali'></Friend>
      <Friend phone='3434' address='Dhaka'></Friend>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log('clicked increase');
  }
  return (
    <div className='person'>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

function Person() {
  const personStyle = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    borderRadius: '10px',
    margin: '20px'
  }
  return (
    <div style={personStyle}>
      <h1>Sakib Al Hasan</h1>
      <h3>Profession: Cricketer</h3>
    </div>
  );
}

function Friend(props) {
  return (
    <div className='person'>
      <h3>Phone: {props.phone}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className='person'>
      <h3>Nayok: {props.nayok}</h3>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  );
}

export default App;
