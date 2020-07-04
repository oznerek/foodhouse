import { combineReducers } from "redux";

import { users } from './user.reducers';
import { shoppingBasket } from './basket.reducers';
import { dishes } from './dish.reducers';

export default combineReducers({
    dishes,
    users,
    shoppingBasket
})