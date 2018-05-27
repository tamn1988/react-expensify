import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {})=> ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count})=>({
    type: 'SET',
    count
})

const resetCount = ()=> ({
    type: 'RESET'
})



const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: return state;
    }
    return state;
});

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 5000}));



// const person = {
//     name: 'Tam',
//     age: 30,
//     location: {
//         city: 'Los Angeles',
//         temp: 60
//     }
// };

// const { name, age } = person;

// const {city, temp:temperature} = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };


// const {name: publisherName = 'Self Publish'} = book.publisher
// console.log(publisherName); // default value of self publish

// const address = ['1299 s juniper street', 'philadelphia', 'pennsylvania', '91744'];

// const [street, city, state, zip] = address;


// console.log(`You are in ${city} ${state}.`)


// const item =['coffee(hot)', '$2.00', '$2.50', '$2.75']

// const [coffee, , medium] = item;

// console.log(`A medium ${coffee} costs ${medium}`);


