import actionTypes from '../constants/itemConstants.js'
import API from '../utils/API.js'


export function loading (loading){
    return {
        type: actionTypes.LOADING,
        payload: loading
    }
}

export function allItems(){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().all().then((items)=>{
            dispatch(loading(false));
            return dispatch(allItemsSuccess(items));
        },(err)=>{
            dispatch(loading(false));
        });
    };
}
export function allItemsSuccess(items){
    return {
        type: actionTypes.ALL_ITEMS_SUCCESS,
        payload: items
    };
}


export function oneItem(id){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().one(id).then((item)=>{
            dispatch(loading(false));
            return dispatch(oneItemSuccess(item));
        },(err)=>{
            dispatch(loading(false));
        });
    };
}
export function oneItemSuccess(item){
    return {
        type: actionTypes.ONE_ITEM_SUCCESS,
        payload: item
    }
}

export function createItem(item){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().create(item).then((item)=>{
            dispatch(loading(false));
            return dispatch(createItemSuccess(item));
        },(err)=>{
            dispatch(loading(false));
        });

    };
}
export function createItemSuccess(item){
    return {
        type: actionTypes.CREATE_ITEM_SUCCESS,
        payload: item
    }
}

export function updateItem(item){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().update(item).then((item)=>{
            dispatch(loading(false));
            return dispatch(updateItemSuccess(item));
        },(err)=>{
            dispatch(loading(false));
        });

    };        
}
export function updateItemSuccess(item){
    return {
        type: actionTypes.UPDATE_ITEM_SUCCESS,
        payload: item
    }
}

export function deleteItem(id){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().delete(id).then(()=>{
            dispatch(loading(false));
            return dispatch(deleteItemSuccess(id));
        },(err)=>{
            dispatch(loading(false));
        });
    };        
}
export function deleteItemSuccess(id){
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        payload: id
    }
}

export function deleteAllItems(){
    return function(dispatch){
        dispatch(loading(true));
        return API.items().deleteAll().then(()=>{
            dispatch(loading(false));
            return dispatch(deleteAllItemsSuccess());
        },(err)=>{
            dispatch(loading(false));
        });
    };
}
export function deleteAllItemsSuccess(){
    return {
        type: actionTypes.DELETE_ALL_ITEMS_SUCCESS
    }
}