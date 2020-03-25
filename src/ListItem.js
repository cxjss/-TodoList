import React,{Component} from 'react';
import './ListItem.css';

class ListItem extends Component{

    constructor(props){
        super(props);
    }

    onChangeItem = (event) => {
        event.target.className = "done-item";
    }

    render(){
        if(this.props.item.done){
            return <p className="done-item">{this.props.item.content}</p>
        }else{
            return <p className="item" onClick={this.onChangeItem}>{this.props.item.content}</p>
        }
    }
    
}

// const ListItem = (props) => {

//     const item = props.item;
//     if(item.done){
//         return <p className="done-item">{item.content}</p>
//     }else{
//         return <p className="item" onClick="onChangeItem">{item.content}</p>
//     }
// }

export default ListItem;