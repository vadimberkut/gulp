import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './Preloader.js';
import App from './containers/App.jsx';

// window.Preloader.show();
start();

function start(){
    window.addEventListener("DOMContentLoaded", function(){
        document.body.innerHTML += "<div id='root'></div>";
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>, 
            document.getElementById('root'),
            function(){
                console.log('1')
                //window.Preloader.hide();
            }
        );
    }, false);
}
