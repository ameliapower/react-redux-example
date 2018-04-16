import axios from 'axios'
import C from './constants';
import { CALL_API } from './middleware'
import data from './data/product-list.json'

// endpoint, method, data
export function requestProducts() {
    console.log(data) 
    return {
        [CALL_API]: {
            endpoint: 'product-list',
            method:'GET',
            types: [
                C.REQUEST_PRODUCTS, 
                C.PRODUCTS_RETRIEVED_SUCCESS, 
                C.PRODUCTS_RETRIEVED_FAILURE
            ] 
        }
    }
}

export function getProductTotal() {
    return {
        [CALL_API]: {
            endpoint: 'view.json',
            method:'GET',
            types: [
                C.GET_TOTAL_NUMBER_OF_PRODUCTS
            ] 
        }
    }
}

export function dispatch(){
    // let config = { 
    //     method: 'GET', 
    //     headers: {   
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    //     // cors: 'no-cors'
    // }
    return fetch(data, { headers: {   
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    } }) 
         //local source doesn't need json parsing???
        .then(response => data.json())
        .then(response => {
            console.log(response)
        })
        .catch( err => {
            console.log(err, 'error fetching data')
        })

}


