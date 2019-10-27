import React, { Component } from 'react'


export default class Todoinput extends Component {
    render() {
        return (
            <header>
                <input onKeyDown = {this.Input} placeholder="添加ToDo"></input>
            </header>
        )
    }
    Input = (e)=>{
        if(e.keyCode === 13){
            if(e.target.value === ""){
                alert("请输入Todo！");
            }
            else{
                this.props.add(e.target.value);
                e.target.value = '';
            }     
        }
    }
}
