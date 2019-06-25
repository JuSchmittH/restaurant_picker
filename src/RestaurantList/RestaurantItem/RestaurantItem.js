import React from 'react';
import { Card, CardHeader, Avatar, CardActionArea } from '@material-ui/core';

const RestaurantItem = props => {
    return (
        <Card>
            <CardActionArea href="/t">
                <CardHeader
                    avatar={
                        props.restaurant.restaurantimage ? (
                            <Avatar
                                alt={
                                    props.restaurant.restaurantTitle +
                                    'Restaurant Photo'
                                }
                                src={props.restaurant.restaurantimage}
                                className=""
                            >
                                {props.restaurant.restaurantLetter}
                            </Avatar>
                        ) : (
                            <Avatar aria-label="Restaurant" className="">
                                {props.restaurant.restaurantLetter}
                            </Avatar>
                        )
                    }
                    title={props.restaurant.restaurantTitle}
                    subheader={props.restaurant.restaurantAddress}
                />
            </CardActionArea>
        </Card>
    );
};

export default RestaurantItem;
