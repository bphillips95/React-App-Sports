import React, { Component } from 'react'

export default class Sports extends Component {
    
    state = { 
        players: 0
    }
// ONE WAY
    // addPlayers = () => {
    //     this.setState({ 
    //         players: this.state.players +1
    //     })
    // }
// BETTER WAY
    addPlayers = (prevCount) => {
        this.setState(prevCount  => ({
            players: prevCount.players +1
        }) )
    } 
    
    render() {
    let team = this.props.team
    let sport = this.props.sport
        return (
            <div>
                <button onClick={this.addPlayers}>Button</button>
                <h2>{team} -  {sport}</h2>
                <h3>{this.state.players}</h3>
            </div>
        )
    }
}