import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'react-proptypes';


import ItemsComponent from '../components/ItemsComponent.jsx';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <div>
                <h1>App</h1>
                <ItemsComponent/>
            </div>
        )
    }
}
App.PropTypes = {

}

export default App;