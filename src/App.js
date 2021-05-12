
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route,Switch} from "react-router-dom"
import Login from './components/Login';
import Home_page from './components/Home_page'

 import Logout from './components/Logout'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    
     <Switch>
    <Route exact path="/" component={Login} />
     <Route  path="/homepage" component={Home_page} />
      <Route  path="/logout" component={Logout} /> 
     </Switch> 
     </Provider>
     </div>
  );
}

export default App;
