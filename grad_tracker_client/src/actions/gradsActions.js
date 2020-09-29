export const fetchGrads = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/grads')
        .then(resp => resp.json())
        .then(grads => dispatch({ type: 'FETCH_GRADS', payload: grads}))
    }
}

export const addGrad = (grad) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/grads', {
            method: 'POST',
            body: JSON.stringify(grad),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(grad => dispatch({ type: 'ADD_GRAD', payload: grad}))
    }
}