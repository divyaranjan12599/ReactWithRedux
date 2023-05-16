import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";
import userReducer from "./users/userReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    user: userReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

export default rootReducer;