import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Actions

export const login = (email, password) => {
  
};

//Reducer
export const userreducer = (state = {}, payload) => {
  switch (action.type) {
    case "DO_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
  }
};

//Root Reducer
export const rootReducer = combineReducers({
  userreducer,
});

//Store
export const store = createStore(rootReducer, applyMiddleware(thunk));
