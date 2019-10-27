import React, { Component } from 'react'
import Input from './components/Input'
import List from './components/List'




export default class Todolist extends Component {

    render() {
        localStorage.setItem('todo', JSON.stringify(this.state.TodoArray));
        return (
            <header>
                <section>
                    <div>
                        <label for="title">ToDoList</label>
                        <Input add={this.add} />
                        <List del={this.del} remove={this.shan} TodoArray={this.state.TodoArray}/>
                    </div>
                </section>
            </header>
        )
    }
    constructor(){
        super();
        let todo = JSON.parse(localStorage.getItem('todo'));
        if(todo === null){
            this.state = {
                TodoArray:[]
            }
        }
        else{
            this.state = {
                TodoArray:todo
            }
        }
    }
    shan = (idx) =>{
        let tempTodo = [...this.state.TodoArray];
        tempTodo[idx].Isdo = tempTodo[idx].Isdo ? 0 : 1;
        this.setState({
            TodoArray:tempTodo
        });
    }
    add = (data)=>{
        var TodoNode = {"value":data,"Isdo":0};
        this.setState({
            TodoArray: [...this.state.TodoArray,TodoNode]
        })
    }
    del = (idx)=>{
        let tempTodo = [...this.state.TodoArray];
        tempTodo.splice(idx,1);
        this.setState((state,props)=>{
            return {
                TodoArray: tempTodo
            }
        });
    }
}