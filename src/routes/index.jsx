import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contacto from '../views/contacto';
import Gallery from '../views/Gallery';
import Home from '../views/Home';
import Login from '../views/LogIn';
import Logup from '../views/LogUp';
import Planta from '../views/Planta';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={ true } component={Home}/>
                <Route path="/tlaxcarnivoras" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/logup" component={Logup} />
                <Route path="/contacto" component={Contacto} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/planta:id" component={Planta} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default Routes;