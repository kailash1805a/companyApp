/**
 * Author: Kailash kumar
 * combine reducer as root reducer
 */

import { combineReducers } from 'redux';
import  companyReducer  from './companyReducer';

const rootReducer = combineReducers({
     companyReducer
});

export default rootReducer;