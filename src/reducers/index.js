import { combineReducers } from 'redux';
import listreducer from './list.reducer';

export default combineReducers ({
    list: listreducer,
});
