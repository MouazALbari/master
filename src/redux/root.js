import  {combineReducers} from 'redux'
import hotelsReducer from './hotels/reducer'
import  reducer from './logIn/reducer'
const root=combineReducers({myHotels:hotelsReducer,logIn:reducer})
export default root