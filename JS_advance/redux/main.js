// import {createStore} from 'https://cdn.skypack.dev/redux';
// ----------------MY REDUX--------------------
function createStore(reducer){
    let state = reducer(undefined, {})
    const subscribers = []
    return{
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);

            subscribers.forEach(subscriber=> subscriber())
        },
        subscribe(subscriber){
            subscribers.push(subscriber)
        }
    }
}



// -----------------MY APP-------------------
const initState = 0;

// Reducer
function bankReducer(state = initState, action){
    switch(action.type){
        case 'DEPOSIT':
            return state + action.payload
        case 'WITHDRAW':
            return state - action.payload
        default:
            return state
    }
}

// store
const store = window.store = createStore(bankReducer)

function actionDeposit(payload){
    return{
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload){
    return{
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

deposit.onclick = function(){
    store.dispatch((actionDeposit(10)))
}
withdraw.onclick = function(){
    store.dispatch((actionWithdraw(10)))
}

// Listener
store.subscribe(()=>
    render()
);

function render(){
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}

render()