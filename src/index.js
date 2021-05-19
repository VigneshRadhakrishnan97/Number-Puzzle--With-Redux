import React from 'react'
import ReactDOM from 'react-dom'
import App from './Componenets/App'
import Reducers from './Reducers'
import {Provider} from 'react-redux'
import { createStore } from 'redux'


const index = () => {

    const store=createStore(Reducers);

    return (
        <div className="main" >
            <Provider store={store}>
            <App />
            </Provider>
        </div>
    );
}

ReactDOM.render(index(),document.getElementById('root'));



