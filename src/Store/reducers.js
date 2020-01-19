import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import headerReducer from 'Components/Header/store/reducer';

const history = createBrowserHistory();

const combinedAppReducers = combineReducers({
  router: connectRouter(history),
  headerReducer,
});

export default combinedAppReducers;
