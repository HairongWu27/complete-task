import React, { Component } from 'react';

class ClearTask extends Component{

    render(){
        return(
            <div>
                <button onClick={this.props.Click}>Clear All Completed Task</button>
                
            </div>
        );
    }

}

export default ClearTask;
