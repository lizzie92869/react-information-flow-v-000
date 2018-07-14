import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    let colors = [getRandomColor()]
    for (let i=0; i<2; i++){ colors.push(getReducedColor(colors[i]))}

    this.state = {
      color: colors[0],
      tier2Color: colors[1],
      tier3Color: colors[2]
    }
  }

  handleClick = () => {
    let colors = [getRandomColor()]
    for (let i=0; i<2; i++){ colors.push(getReducedColor(colors[i]))}
    this.setState({
      color: colors[0],
      tier2Color: colors[1],
      tier3Color: colors[2]
    })
  }

  handleChildClick=(e)=>{
    e.stopPropagation()
    let colors = [getRandomColor()]
    for (let i=0; i<2; i++){ colors.push(getReducedColor(colors[i]))}

    this.setState({
      tier2Color: colors[1],
      tier3Color: colors[2]
    })
  }

  handleGrandChildClick=(e)=>{
    e.stopPropagation()
    let colors = [getRandomColor()]
    for (let i=0; i<2; i++){ colors.push(getReducedColor(colors[i]))}
    this.setState({
      tier3Color: colors[2]
    })
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick} childColor={this.state.tier2Color} grandChildColor={this.state.tier3Color}/>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick} childColor={this.state.tier2Color} grandChildColor={this.state.tier3Color}/>
      </div>
    )
  }
}
