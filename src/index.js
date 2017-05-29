import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import store from './store.js';
import './Preloader.js';

// window.Preloader.show();
start();

function start(){
    window.addEventListener("DOMContentLoaded", function(){
        document.body.innerHTML += "<div id='root'></div>";
        ReactDOM.render(
            <Root store={store}/>, 
            document.getElementById('root'),
            function(){
                // console.log('1');
                //window.Preloader.hide();
            }
        );
    }, false);
}
