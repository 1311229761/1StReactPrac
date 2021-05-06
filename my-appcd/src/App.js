import logo from './logo.svg';
import react, {useEffect, useState} from 'react';
import './App.css';

function App() {



  const price =[{name:"illostrator", mollo:"100$"}, {name:"photoshop", mollo:"10$"}, {name:"elementor pro", mollo:"200$"}]
  return (
    <div className="App">
      <Users></Users>
      
        <Friend name = {price[0].name} age = {price[1].mollo}></Friend>
       
        {
          price.map(janina => <Friend name= {janina.name} age = {janina.mollo}></Friend>)
        }

    </div>
  );

  function Friend(props) {
    const style = {
      height : "250px",
      width : "30%",
      backgroundColor : "grey",
      margin : "auto"
    }
    return(
      <div style = {style}>
        <h1>my name is {props.name}</h1>
        <h3>my age is {props.age}</h3>
        
        
      </div>
    )
  }

  function Users() {
    const [nam, setusers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setusers(data))
    })
    return(
      <div>
        <h3>net users {nam.length}</h3>
        <ul>
          {
            nam.map(user=><li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default App;
