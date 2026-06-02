import './App.css';
import {User} from './User'
function App() {
const users = [
{name: "Ensar", age: 16},
{name: "Mehlika", age: 22},
{name: "Asiye", age : 42},
];



return (<div className="App"> 

  {users.map ((user , key) => {
  return <User name={user.name} age ={user.age}/>;
})}
</div>
);
}

export default App;