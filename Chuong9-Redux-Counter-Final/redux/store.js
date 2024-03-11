import { createStore, combineReducers} from 'redux';
import CountReducer from './countReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
});
 
export const store = createStore(rootReducer);