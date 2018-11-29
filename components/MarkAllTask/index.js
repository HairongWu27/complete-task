import React, { Component } from 'react';


class MarkAllTask extends Component{

    render(){
        
        return(
            <div>
                <button onClick={this.props.Click}>Mark All Task</button>    
            </div>
        );
    }

}

export default MarkAllTask;