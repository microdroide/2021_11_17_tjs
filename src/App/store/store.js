import {combineReducers, createStore} from 'redux';
import { REST_ADR, REST_RESSOURCES } from "../config/config";

export const ressourcesInitialState={
    memes:[],
    images:[],
}

export const RESSOURCES_PUBLIC_ACTIONS=Object.freeze({
    REPLACE_MEMES_LIST: 'REPLACE_MEMES_LIST',
    REPLACE_IMAGES_LIST: 'REPLACE_IMAGES_LIST',
    ADD_MEME:'ADD_MEME',
});

function ressourceReducer(state = ressourcesInitialState, action) {
    console.log(action);
    switch (action.type) {
        case 'INIT':
            const pimage=fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then(f => f.json());
            const pmemes=fetch(`${REST_ADR}${REST_RESSOURCES.memes}`).then(f => f.json());
            Promise.all([pimage, pmemes])
                .then(arr_arr=>{
                    store.dispatch({type:'INIT_ARRAYS', values: arr_arr});
                });
            

            /** 
            fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
            .then(f => f.json())
            .then(arr=> store.dispatch({type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: arr}));
            */


            return state;
        case 'INIT_ARRAYS':
                return { ...state, images: action.values[0], memes: action.values[1] };
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
            return { ...state, images: action.values }
        case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
            return { ...state, memes: action.values }
        case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
            return { ...state, memes: [...state.memes, action.value] }
        default: return state;
    }
};


/*
let state = ressourceReducer(undefined,
    { type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST },
    values: [{ id: 0 }, { id: 1 }] });

console.log(state);
*/

/*
const store = createStore(ressourceReducer);
store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: [{ id: 0 }, { id: 1 }] })
store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST, values: [{ id: 10 }, { id: 11 }] })
store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.ADD_MEME, value: { id: 20 }})

export default store;
*/



const currentInitialState = {
        "imageId": 0,
        "titre": "",
        "text": "",
        "x": 370,
        "y": 600,
        "fontSize": 27,
        "color": "black",
        "fontWeight": "900",
        "underline": true,
        "italic": true,
        "frameX": 0,
        "frameY": 0
};

export const CURRENT_PUBLIC_ACTION = Object.freeze({
    UPDATE_CURRENT: 'UPDATE_CURRENT',
    CLEAR_MEME: 'CLEAR_MEME',
    SAVE_MEME: 'SAVE_MEME',
}
);

const currentReducer = (state = currentInitialState, action) => {
    switch (action.type) {
    


        case CURRENT_PUBLIC_ACTION.UPDATE_CURRENT:
            return { ...action.value };
        case CURRENT_PUBLIC_ACTION.CLEAR_MEME:
            return { ...currentInitialState };
        default:
            return state
    }
};

const store = createStore(
    combineReducers({ current: currentReducer, ressources: ressourceReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({ type: "INIT" });

// store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: [{ id: 0 }, { id: 1 }] })
// store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST, values: [{ id: 10 }, { id: 11 }] })
// store.dispatch({ type:RESSOURCES_PUBLIC_ACTIONS.ADD_MEME, value: { id: 20 }})

export default store;
