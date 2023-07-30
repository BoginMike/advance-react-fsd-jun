import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidMount() {
        console.log("Rendered")

        const v = setInterval(() => {
            this.increment()
            console.log("interval")
        }, 1000);
        this.setState({
            intervalObject: v
        })
    }
    componentDidUpdate() {
        console.log("Updated")
    }
    componentWillUnmount() {
        console.log("Destroying")
        //clean up
        clearInterval(this.state.intervalObject)
    }
    constructor() {
        super()
        this.state = {
            value: 0,
            intervalObject: null
        }
    }

    increment = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>+</button>
                <span>{this.state.value}</span>
            </div>
        )
    }
}
