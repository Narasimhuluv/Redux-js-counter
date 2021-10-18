// var heading = document.querySelector('h1')
// var counter = 0;
// // queryselectors

// var step_5 = document.querySelector('.step-5')
// var step_10 = document.querySelector('.step-10')
// var step_15 = document.querySelector('.step-15')

// var increament = document.querySelector('.inc')
// var decreament = document.querySelector('.dec')
// var reset = document.querySelector('.reset')

// var stepSelected = 1;

// step_5.addEventListener('click', (event) => {
//     stepSelected = event.target.innerText;
//     step_5.classList.add('active')
//     step_10.classList.remove('active')
//     step_15.classList.remove('active')
//     console.log(stepSelected)
// })
// step_10.addEventListener('click', (event) => {
//     stepSelected = event.target.innerText
//     step_10.classList.add('active')
//     step_5.classList.remove('active')
//     step_15.classList.remove('active')
//     console.log(stepSelected)
    
// })
// step_15.addEventListener('click', (event) => {
//     stepSelected = event.target.innerText
//     step_15.classList.add('active')
//     step_10.classList.remove('active')
//     step_5.classList.remove('active')
//     console.log(stepSelected)
// })

// increament.addEventListener('click', () => {
//     counter = counter + Number(stepSelected)
//     heading.innerHTML = counter

// })
// decreament.addEventListener('click', () => {
//     if(counter >= 0){
//         counter = counter - Number(stepSelected)
//         heading.innerHTML = counter
//     }else{
//         counter = counter;
//         heading.innerHTML = counter
//     }

// })
// reset.addEventListener('click', () => {
//     heading.innerHTML = 0
// })



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

var stepSelected = 1;

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

increament.addEventListener('click', () => {
    store.dispatch({
        type : 'increament',
        step : stepSelected
    })

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




