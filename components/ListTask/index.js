import React, { Component } from 'react';


class ListTask extends Component{

    render(){
        return(
            <div>
                <p>{'hello world'}</p>
                {this.props.list.map((x ) =>{
                    if(!x.completed){
                    return ( <li  key={x.id} 
                             onClick={()=>this.props.ToDoClick(x.id)}
                             > {x.text}{}{x.id}</li>)}
                })}
                
            </div>
        );
    }

}

export default ListTask;


