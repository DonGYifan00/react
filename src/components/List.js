import React, { Component } from 'react'


export default class List extends Component {
    render() {
        let ing = 0;
        let end = 0;
        var {TodoArray} = this.props;
        return (
            <div>
                {TodoArray.map((item,idx) => {
                    if(item.Isdo === 0){
                        ing++;
                        return(
                            <ol id="todolist" class="demo-box">
                                <li draggable="true">
                                    <input type="checkbox"  onClick={()=>this.props.remove(idx)} onchange="update(2,&quot;done&quot;,true)"></input>
                                    <p>{item.value}</p>
                                    <a href="javascript:remove(2)" onClick={()=>this.props.del(idx)}>-</a>
                                </li>
                            </ol>
                        )
                    }
                    return "";
                })}
                <h2 >正在进行<span>{ing}</span></h2>                
                {TodoArray.map((item,idx) => {
                    if(item.Isdo === 1){
                        end++;
                        return(
                            <ol id="todolist" class="demo-box">
                                <li draggable="true">
                                    <input type="checkbox"  onClick={()=>this.props.remove(idx)} onchange="update(2,&quot;done&quot;,true)"></input>
                                    <p>{item.value}</p>
                                    <a href="javascript:remove(2)" onClick={()=>this.props.del(idx)}>-</a>
                                </li>
                            </ol>
                        )
                    }
                    return "";
                })} 
                <h2>已经完成<span>{end}</span></h2>
            </div>
        );
    }
}




