import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantList from './RestaurantList/RestaurantList';
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={RestaurantList} />
        </Switch>
    );
}

export default App;
