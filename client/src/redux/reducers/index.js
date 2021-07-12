import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import notify from './notifyReducer';
import theme from './themeReducer';
import discover from './discoverReducer';
import profile from './profileReducer';

export default combineReducers({
	auth,
	alert,
	theme,
	notify,
	discover,
	profile,
});
