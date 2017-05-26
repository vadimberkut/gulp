import React from 'react';
import ReactDOM from 'react-dom';

class Preloader extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            display: 'none'
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    show(cb) {
        this.setState({display: 'flex'}, cb);
    }
    hide(cb) {
        this.setState({display: 'none'}, cb);
    }
    toggle(cb) {
        if(this.state.display == 'none')
            this.show(cb);
        else
            this.hide(cb);
    }

    render(){
        var self = this;
        setTimeout(()=>self.setState({display: 'flex'}), 5000);
        let style = {
            display: this.state.display,
            // display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f8f8',
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: '10000'
        };

        let forReturn = (
                <div style={style}>
                    <img src="./images/loading.svg"/>
                    {/*<img className="" src="./images/loading6.gif"/>*/}
                </div>
            ); 
        return forReturn;
    }
}

if('document' in window){
    document.body.innerHTML += "<div id='appPreloader'></div>";
    window.Preloader = ReactDOM.render(<Preloader/>, document.getElementById('appPreloader'));
}