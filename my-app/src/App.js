import logo from './logo.svg';
import react, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const name = [ "xahid hasan", "sumon", "saimon", "mishor"]
  const price =[{name:"illostrator", mollo:"100$"}, {name:"photoshop", mollo:"10$"}, {name:"elementor pro", mollo:"200$"}]
  return (
    <div className="App">
      <header className="App-header">
       <Users></Users>
       <Counter></Counter>
        <Person name = {name[0]} job= "debeloper"></Person>
        <Person name = {name[1]} job="farmer"></Person>
        <Person name = {name[2]} job = "army"></Person>
        <Person name = {name[3]} job= "bakeary calai"></Person>

        <Pd name = {price[0].name} worth = {price[0].mollo}></Pd>
        <Pd name = {price[1].name} worth = {price[1].mollo}></Pd>
        <Pd name = {price[2].name} worth = {price[2].mollo}></Pd>
        <ul>
          {name.map(nam=><li>{nam}</li>)}
          {price.map(mollo=> <li>{mollo.name}</li> )}
        </ul>
       {
         price.map(taka => <pd pd={taka}></pd>)
       }
     
      </header>
    </div>
  );
 
  function Users() {
    const [users, setusers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setusers(data))
    })
    return(
      <div>
        <h3>net users {users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }
 
  function Person(props) {
    const rongMistri = { 
      border:"2px solid green",
      margin:"2px"
    }

    return (
    <div style={rongMistri}>
      <h1>my name is {props.name}</h1>
      <p>his profession is {props.job}</p>
    </div>
    )
  }
  function Counter() {
   
    const [gona , setcount] = useState(10)
    return(
      <div>
        <h1>count :{gona}</h1>
        <button onMouseEnter={()=>setcount(gona + 1)}>increase</button>
      <button onClick={()=>setcount(gona - 1)}>decrease</button>
      </div>
    )
    
  }

  function Pd(props) {
    const PdStyle ={ 
      height : "250px",
      width : "30%",
      backgroundColor : "grey",
      margin : "5px"
    }
    return(
      <div style = {PdStyle}>
        <h1>{props.name}</h1>
        <h3 >{props.worth}</h3>
        <button> buy now</button>
      </div>
    )
  }

 
}

export default App;
// https://jsonplaceholder.typicode.com/users