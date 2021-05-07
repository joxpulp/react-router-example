
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Points from './Points';
import History from './History';

export default function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/points"><Points/></Route>
        <Route path="/history"><History/></Route>
      </Switch>
    </div>
  );
}
