import { combineReducers } from 'redux';
import settingsReducer from 'containers/Settings/actions';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
