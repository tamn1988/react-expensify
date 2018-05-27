import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses);
// })

store.dispatch(addExpense({ description: 'Water Bill', amount: 1500, createdAt: 455 }));
store.dispatch(addExpense({ description: 'Rent', amount: 152300, createdAt:1 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2500, createdAt: 123 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


// const Info = (props) => (
//     <div>
//         <h1>info</h1>
//         <p>The info is : {props.info}</p>
//     </div>
// );

// const withAdminWarning = (WrappedComponent) => {
//     return (props)=> (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     ) 
// };

// const requiredAuthentication = (WrappedComponent)=> {
//     return (props) => (
//         <div>
//             {props.isAuthenticated ? <WrappedComponent {...props} /> : 'Please log in'}
//         </div>
//     )
// }

// const AdminInfo = withAdminWarning(Info)
// const Authenticated = requiredAuthentication(Info);

// // ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details' />, document.getElementById('app'));
// ReactDOM.render(<Authenticated isAuthenticated={false} info='You are authenticated. Here are the details' />, document.getElementById('app'));