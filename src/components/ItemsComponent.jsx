import React from 'react';
import PropTypes from 'react-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemActions from '../actions/itemActions.js';

class ItemsComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };

        this.onCreateClick = this.onCreateClick.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onShowClick = this.onShowClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    //Mounting methods
    // componentWillMount();
    componentDidMount() {
        this.props.itemActions.allItems();
    }
    //Updating methods
    // componentWillReceiveProps();
    // shouldComponentUpdate();
    // componentWillUpdate();
    // componentDidUpdate();
    //Unmounting
    // componentWillUnmount();

    onCreateClick(e){
        e.preventDefault();
        this.props.itemActions.createItem({name: this.refs.name.value});
    }
    onUpdate(e){
        e.preventDefault();
        let item = this.props.items.find((i)=>i.id == e.target.id);
        if(!item)
            return;
        this.props.itemActions.updateItem({...item, name: e.target.value});
    }
    onShowClick(e){
        e.preventDefault();
        let item = this.props.items.find((i)=>i.id == e.target.id);
        if(!item)
            return;
        alert(JSON.stringify(item))
    }
    onDeleteClick(e){
        e.preventDefault();
        this.props.itemActions.deleteItem(e.target.id);
    }

    render(){
        return (
            <div>
                <h1>Create new item:</h1>
                <input ref="name" type="text" />
                <button onClick={this.onCreateClick}>Create</button>
                <h1>Items:</h1>
                {this.props.items.map((i)=>
                    <div key={i.id}>
                        <p>
                            {i.id} : 
                            <input id={i.id} type="text" value={i.name} onChange={this.onUpdate}/>
                            <button id={i.id} onClick={this.onShowClick}>Show</button>
                            <button id={i.id} onClick={this.onDeleteClick}>x</button>
                        </p>
                    </div>)}
                
                
            </div>
        );
    }
}

ItemsComponent.PropTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    item: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        loading: state.itemState.loading,
        items: state.itemState.items,
        item: state.itemState.item
    }
}
function mapDispatchToProps(dispatch){
    return {
        itemActions: bindActionCreators(itemActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);
