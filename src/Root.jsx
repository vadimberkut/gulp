import React from 'react';
import PropTypes from 'react-proptypes';
import { Provider } from 'react-redux';
// import { Router, IndexRoute, Route } from 'react-router';
// import { Switch, BrowserRouter, IndexRoute, Route } from 'react-router';
import { Switch, BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory  from 'history/createBrowserHistory'; //is for use in modern web browsers that support the HTML5 history API
import createHashHistory  from 'history/createHashHistory'; //is for use in legacy web browsers

import App from './containers/App.jsx';
import HomeComponent from './containers/HomeComponent.jsx';
import ItemsComponent from './components/ItemsComponent.jsx';

//Router v2,3
/*class Root extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={this.props.store}>
                <Router history={createHashHistory()}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomeComponent}/>
                        <Route path="/" component={HomeComponent}/>
                        
                        <Route path="/items" component={ItemsComponent}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}*/

//Router v4
class Root extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <div>
                        <Route path='/' component={App} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;