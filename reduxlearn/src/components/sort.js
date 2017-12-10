const sort =(state = "SORTED_BY_DATE",action) =>{

    switch (action.type){
        case "SORT_COLORS":
            return action.sortBy
        default :
            return state
    }


}


let state = "SORTED_BY_DATE"

let action  = {
    type: "SORT_COLORS",
    sortBy: "SORTED_BY_TITLE"
}

let nextState = sort(state,action)

console.log(nextState)

action = {
    type: "SORT_COLORS",
    sortBy: "SORTED_BY_RATING"
}

nextState =sort(nextState,action)
console.log(nextState)
export default  sort