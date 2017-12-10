import React, {Component} from 'react'


export const  color = (state ={}, action) => {

    switch (action.type){

        case "ADD_COLOR" :

            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0,
            }
        case "RATE_COLOR":
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}



export const colors = (state=[], action) =>{
    switch (action.type) {
        case "ADD_COLOR" :
            return [
                ...state,
                color({},action)
            ]
        case "RATE_COLOR" :
            return state.map(
                c => color(c,action)
            )
        case "REMOVE_COLOR":
            return state.filter(
                c => c.id !== action.id
            )
        default :
            return state
    }
}

let currentColors = [
    {
        id:1,
        title: "Berry Blue",
        color: "#0000FF",
        rating: 0,
        timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
]

console.log(currentColors)

let action = {

    type: "ADD_COLOR",
    id: 2,
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
}

let newColors = colors(currentColors,action)

console.log(newColors)
action = {
    type: "RATE_COLOR",
    id: 1,
    rating: 5
}

newColors = colors(newColors,action)

console.log(newColors)

action ={
    type:"REMOVE_COLOR",
    id: 2
}

newColors = colors(newColors,action)
console.log(newColors)


