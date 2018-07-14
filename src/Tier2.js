import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'



const Tier2 = (props) => 
      (<div onClick={props.handleClick} className="tier2" style={{backgroundColor: props.childColor, color: props.childColor}} >
        <Tier3 handleMyClick={props.handleChildClick} myColor={props.grandChildColor}/>
        <Tier3 handleMyClick={props.handleChildClick} myColor={props.grandChildColor}/>
      </div>)


export default Tier2

  
