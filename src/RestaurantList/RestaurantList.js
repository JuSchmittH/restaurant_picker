import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import RestaurantItem from './RestaurantItem/RestaurantItem';
import './RestaurantList.scss';

const RestaurantList = () => {
    const restaurantData = [
        {
            restaurantTitle: 'Severo Burguer',
            restaurantimage: null,
            restaurantLetter: 'S',
            restaurantAddress:
                'R. Marcelo Gama, 1403 - Auxiliadora, Porto Alegre',
        },
    ];

    const [restaurants, setRestaurants] = useState(restaurantData);

    const createRestaurantList = () => {
        return restaurants.map((restaurant, id) => {
            return <RestaurantItem key={id} restaurant={restaurant} />;
        });
    };

    return (
        <div>
            <Navbar />
            {createRestaurantList()}
        </div>
    );
};

export default RestaurantList;
