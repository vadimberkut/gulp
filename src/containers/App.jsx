import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'react-proptypes';
import { Switch, BrowserRouter, HashRouter, IndexRoute, Route, Link } from 'react-router-dom';

import HomeComponent from './HomeComponent.jsx';
import ItemsComponent from '../components/ItemsComponent.jsx';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        let { location, match } = this.props; //router prop
        return (
            <div className="app-container">
                {/*{this.props.children}*/}
                
                {/*{React.Children.map(this.props.children, (child, index) => {
                        //Get props of child
                        const childProps = child.props;

                        //do whatever else you need, create some new props, change existing ones
                        //store them in variables

                        return React.cloneElement(child);
                    }
                )}*/}

                <div className="app-menu">
                    <h3>App Menu</h3>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/items`}>Items</Link></li>
                    </ul>
                </div>
                <div className="app-content">
                    <h3>App Content</h3>
                    <Switch>
                        <Route exact path='/' component={HomeComponent} />
                        <Route path='/items' component={ItemsComponent} />
                    </Switch>
                </div>


            </div>
        )
    }
}
App.PropTypes = {

}

export default App;