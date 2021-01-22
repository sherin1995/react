import React, { Component } from 'react'
import './index.css'

export default class Count extends Component {
    state = {
        count: 0,
    }

    plus = () => {
        const nowNum = this.selectNum.value
        this.setState({
            count: this.state.count + nowNum * 1,
        })
    }
    jian = () => {
        const nowNum = this.selectNum.value
        this.setState({
            count: this.state.count - nowNum * 1,
        })
    }
    ifOdd = () => {
        if (this.state.count % 2 === 1) {
            const nowNum = this.selectNum.value
            this.setState({
                count: this.state.count + nowNum * 1,
            })
        }
    }
    plusAsync = () => {
        const nowNum = this.selectNum.value
        setTimeout(() => {
            this.setState({
                count: this.state.count + nowNum * 1,
            })
        }, 3000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.plus}>+</button>
                <button onClick={this.jian}>-</button>
                <button onClick={this.ifOdd}>当前求和为基数再加</button>
                <button onClick={this.plusAsync}>异步加</button>
            </div>
        )
    }
}
