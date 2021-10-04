import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/LogIn';
import Logup from '../views/LogUp';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={ true } component={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/logup" component={Logup} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default Routes;