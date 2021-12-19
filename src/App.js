import React from "react";
import {Switch, Route, NavLink} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Subreddit from "./pages/Subreddit";
import './App.css';

function App() {
    return (
        <div className="App">

            <NavLink to='/'/>
            <NavLink to='/subreddit/:id'/>

            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>

                <Route path='/subreddit/:id'>
                    <Subreddit/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;