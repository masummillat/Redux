import { createStore,combineReducers,compose } from 'redux'
import {colors} from './reducers'
import sort  from './sort'
import {v4} from 'uuid'


export  const store  = createStore(
    combineReducers({colors,sort}),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) : {}
)

console.log(store.getState())

const unsbuscribLogger = store.subscribe(()=>{
    localStorage['redux-store'] = JSON.stringify(store.getState())
})


unsbuscribLogger()
console.log(JSON.stringify(localStorage['redux-store']))

//action creator
const addColor = (title,color)  => ({
    type:"ADD_COLOR",
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
})

const removeColor = id => ({
    type:"RATE_COLOR",
    id
})

const rateColor = (id,rating) => ({
    type: "RATE_COLOR",
    id,
    rating
})

const sortColors = sortedBy =>
    (sortedBy === "rating") ?
        ({
            type: "SORT_COLORS",
            sortBy: "SORT_BY_RATING"
        }):
        (sortedBy === "title") ?
            ({
                type: "SORT_COLORS",
                sortBy: "SORT_BY_TITLE"
            }):
            ({
                type: "SORT_COLORS",
                sortBy: "SORT_BY_DATE"
            })




const populate = compose(
    () => store.dispatch(addColor("Big Blue", "#0000FF")),
    () => store.dispatch(addColor("Tomato", "#990000")),
    () => store.dispatch(addColor("lawn", "#009900")),
    () => store.dispatch(addColor("Party Pink", "#F142FF"))
)
const print = compose(
    list => console.log(list),
    titles => titles.join(", "),
    map => map(c=>c.title),
    colors => colors.map.bind(colors),
    state => state.colors
)
populate()
print(store.getState())
console.log(store.getState())

localStorage.clear()
console.log(store.getState())