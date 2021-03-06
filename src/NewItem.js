import React, { Component } from "react";

class NewItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputContent : ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            inputContent:event.target.value
        })
        // console.log(this.state.inputContent)
    }

    onAddBtnClick = () => {
        this.props.addItem(this.state.inputContent)
        this.setState({
            inputContent:''
        })
    }

    render(){
        return (
            <div>
                <input value={this.state.inputContent} onChange={this.onInputChange} />
                <button onClick={this.onAddBtnClick}>Add</button>
            </div>
        )
    }
}

export default NewItem;