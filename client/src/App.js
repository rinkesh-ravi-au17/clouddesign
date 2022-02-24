import Home from './components/Home';
import Addtask from './components/Addtask';
import Edittask from './components/Edittask';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <Switch>
     <Route exact path = "/" component= {Home}/>
     <Route exact path = "/add" component= {Addtask}/>
     <Route exact path = "/edit" component= {Edittask}/>
     </Switch>
    </BrowserRouter>
  
  );
}

export default App;
