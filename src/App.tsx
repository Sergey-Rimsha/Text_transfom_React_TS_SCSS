import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Transform from './components/Transform/transform';
import Game from './components/Game/Game';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/transform">Transform</Link>
                </div>
                <div>
                    <Link to="/game">Game</Link>
                </div>

                <Switch>
                    <Route path="/transform">
                        <Transform/>
                    </Route>
                    <Route path="/game">
                        <Game/>
                    </Route>
                </Switch>
            </Router>
            {/* <Transform /> */}
        </div>
    );
}

export default App;