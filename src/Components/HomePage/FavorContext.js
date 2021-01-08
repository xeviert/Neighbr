import React, {useState, createContext} from 'react';

export const FavorContext = createContext();

export const FavorProvider = props => {

    const [favors, setFavors] = useState([
        {
        id: 1,
        title: "Clean My Kitchen",
        payment: "$35",
        description: "I have a pile of dishes that need to be cleaned as well as a messy oven."
        },
        {
        id: 2,
        title: "Kill this Cockroach!",
        payment: "$20",
        description: "I'll pay anyone who can come over and kill this cockroach for me."
        },
        {
        id: 3,
        title: "Help with Blinds",
        payment: "2 dinners",
        description: "I need an extra pair of hands to help me put up these window blinds."
        },
        {
        id: 4,
        title: "Walk My Dog",
        payment: "$15",
        description: "I need to study for my exam tomorrow and would really appreciate it if anyone could walk my dog for me."
        }
    ]);

    return(
        <FavorContext.Provider value={[ favors, setFavors ]}>
            {props.children}
        </FavorContext.Provider>
    );
} 