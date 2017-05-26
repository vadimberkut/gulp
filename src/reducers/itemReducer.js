import actionTypes from '../constants/itemConstants.js';
import _ from 'lodash';

const initialState = {
    loading: false,
    items: [],
    item: null
};

export default function(state = initialState, action) {
    switch(action.type) {

        //BASIC
        case actionTypes.ITEMS_LOADING:
            return Object.assign({}, state, { loading: action.payload });

        case actionTypes.ALL_ITEMS_SUCCESS:
            return {...state, items: action.payload};
        
        case actionTypes.ONE_ITEM_SUCCESS:
            return {...state, item: action.payload};

        case actionTypes.CREATE_ITEM_SUCCESS:
            return {...state, items: [action.payload, ...state.items]}

        case actionTypes.UPDATE_ITEM_SUCCESS:
            return {...state, items: _.merge(
                    [],
                    _.map(state.items, (item) => item.id == action.payload.id ? action.payload : item)
                )
            };

        case actionTypes.DELETE_ITEM_SUCCESS:
            return {...state, items: _.filter(state.items, (item)=> item.id != action.payload)};

        case actionTypes.DELETE_ALL_ITEMS_SUCCESS:
            return {...state, items: []}
    }
    return state;
};