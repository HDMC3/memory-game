import { Switch, Route, Redirect } from 'wouter';
import { Game } from './pages/Game';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route>{() => <Redirect to='/' /> }</Route>
        </Switch>
    );
};
