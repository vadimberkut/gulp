import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import store from './store.js';
import Preloader from './Preloader.js';

window.Preloader = Preloader;

window.Preloader.show();
start();


function start(){
    window.addEventListener("DOMContentLoaded", function(){
        document.body.innerHTML += "<div id='root'></div>";
        ReactDOM.render(
            <Root store={store}/>, 
            document.getElementById('root'),
            function(){
                window.Preloader.hide();
            }
        );
    }, false);
}
