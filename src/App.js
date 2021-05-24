import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Container from './components/Container/Container'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar'
import Error from './components/Error/Error'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Customers from './components/Customers/Customers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Catalog' component={Catalog} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/Orders' component={Orders} />
            <Route exact path='/Customers' component={Customers} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/*' component={Error} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div >
  );
}

export default App;
