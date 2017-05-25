import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'react-proptypes';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>App</h1>
            </div>
        )
    }
}
App.PropTypes = {

}

window.addEventListener("DOMContentLoaded", function(){
    document.body.innerHTML += "<div id='root'></div>";
    ReactDOM.render(<App/>, document.getElementById('root'));
}, false);