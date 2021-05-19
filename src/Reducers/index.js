import { combineReducers } from 'redux'
import { initialMatrix,currentMatrix  } from './reducersFunctions'

export default combineReducers({ initialMatrix : initialMatrix , currentMatrix :currentMatrix });

