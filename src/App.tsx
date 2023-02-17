import { Switch, Route, Redirect } from 'wouter';
import { GameProvider } from './context/game';
import { Game } from './pages/Game';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/game">
                <GameProvider>
                    <Game />
                </GameProvider>
            </Route>
            <Route>{() => <Redirect to='/' /> }</Route>
        </Switch>
    );
};
