import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';

export default function Routes(){
    return(
        <Switch>
           <Route exact path="/" component={Home} />
        </Switch>
    )
}