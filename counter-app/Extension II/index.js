var store = Redux.createStore(reducer);
var counter = store.getState();

var heading = document.querySelector('h1')
// queryselectors

var step_5 = document.querySelector('.step-5')
var step_10 = document.querySelector('.step-10')
var step_15 = document.querySelector('.step-15')

var increament = document.querySelector('.inc')
var decreament = document.querySelector('.dec')
var reset = document.querySelector('.reset')

var max_15 = document.querySelector('.max-15')
var max_100 = document.querySelector('.max-100')
var max_200 = document.querySelector('.max-200')

var stepSelected = 1;
// steps 
step_5.addEventListener('click', (event) => {
    stepSelected = event.target.innerText;
    step_5.classList.add('active')
    step_15.classList.remove('active')
    step_10.classList.remove('active')
    console.log(stepSelected)
})
step_10.addEventListener('click', (event) => {
    stepSelected = event.target.innerText
    step_10.classList.add('active')
    step_5.classList.remove('active')
    step_15.classList.remove('active')
    console.log(stepSelected)
})
step_15.addEventListener('click', (event) => {
    stepSelected = event.target.innerText
    step_15.classList.add('active')
    step_5.classList.remove('active')
    step_10.classList.remove('active')
    console.log(stepSelected)
})
// max values
var maxSelect = null
max_15.addEventListener('click', (event) => {
    maxSelect = event.target.innerText ;
    max_15.classList.add('active')
    max_100.classList.remove('active')
    max_200.classList.remove('active')
    console.log(maxSelect)
})

max_100.addEventListener('click', (event) => {
    maxSelect = event.target.innerText 
    max_15.classList.remove('active')
    max_100.classList.add('active')
    max_200.classList.remove('active')
    console.log(maxSelect)
})
max_200.addEventListener('click', (event) => {
    max_15.classList.remove('active')
    max_100.classList.remove('active')
    max_200.classList.add('active')
    maxSelect = event.target.innerText 
    console.log(maxSelect)
})

// increament
increament.addEventListener('click', () => {
    if(counter  <= maxSelect){
        store.dispatch({
            type : 'increament',
            step : stepSelected
        })
    }
})
decreament.addEventListener('click', () => {
    store.dispatch({
        type : 'decreament',
        step : stepSelected
    })
})
reset.addEventListener('click', () => {
    stepSelected = 1;
    store.dispatch({
        type : 'reset',
        step : stepSelected
    })
    max_15.classList.remove('active')
    max_100.classList.remove('active')
    max_200.classList.remove('active')
    step_5.classList.remove('active')
    step_15.classList.remove('active')
    step_10.classList.remove('active')
})
store.subscribe(() => {
    counter = store.getState();
    heading.innerHTML = counter
})

function reducer(state=0 , action){
    switch (action.type) {
        case 'increament':
            return state + Number(action.step || 1)
            break;
        case 'decreament':
            if(state > 0){
                return state - Number(action.step || 1)
            }else{
                return counter
            }
            break;
        case 'reset':
            return 0;
    
        default:
            return state;
    }
}