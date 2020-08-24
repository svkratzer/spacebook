import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import indexTypeReducer from './index_type_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  index: indexTypeReducer
});

export default uiReducer;