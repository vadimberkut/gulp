import React from 'react';
import ReactDOM from 'react-dom';

/*class Preloader extends React.Component {
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
        let style = {
            display: this.state.display,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f8f8',
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: '10000'
        };

        console.log(this.state.display);
        let forReturn = (
                <div style={style}>
                    <img className="" src="./images/loading.svg"/>
                </div>
            ); 
        return forReturn;
    }
}*/

// if('document' in window){
//     document.body.innerHTML += "<div id='appPreloader'></div>";
//     window.Preloader = ReactDOM.render(<Preloader/>, document.getElementById('appPreloader'));
// }


//
if('document' in window){
    document.body.innerHTML += "<div id='appPreloader' class='app-preloader'><img class='' src='./images/loading.svg'/></div>";
}

class Preloader {
    constructor(){

    }
    static show(){
        document.getElementById('appPreloader').style.display = 'flex';
    }
    static hide(){
        document.getElementById('appPreloader').style.display = 'none';
    }
    static toggle(){
        if(document.getElementById('appPreloader').style.display == 'none')
            Preloader.show();
        else
            Preloader.hide();
    }
}
export default Preloader;
