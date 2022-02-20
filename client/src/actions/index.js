import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function listOfTemperaments(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/temperament');
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload:json.data
        })
    }
}

export function filterByTemp(payload){
    return{
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function filterByCreated(payload){
    return{
        type: 'FILTER_BY_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}