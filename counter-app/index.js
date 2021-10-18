var store = Redux.createStore(reducer)
var counter = store.getState();

var heading = document.querySelector('h1');
var increament = document.querySelector('.inc');
var decreament = document.querySelector('.dec');
var reset = document.querySelector('.reset');


increament.addEventListener("click", () =>{
    store.dispatch({
        type : "increament"
    })
})
decreament.addEventListener("click", () =>{
    store.dispatch({
        type : "decreament"
    })
})
reset.addEventListener("click", () =>{
    store.dispatch({
        type : 'reset'
    })
})
store.subscribe(() => {
    counter = store.getState();
    heading.innerText = counter;
})

function reducer(state=0, action){
    switch (action.type) {
        case 'increament':
            return state + (action.step || 1);
        break;
        case 'decreament':
            if(state === 0){
                alert("we can't go with negative values")
            }else{
                return state - (action.step || 1);
            }
        break;
        case 'reset':
            return 0;
        break;
        default:
            return state;
    }
}


