import React, { Component } from 'react'
//Cách 1 : import vào file component
// import '../assets/styles/styles.css';
//Cách 2: Import css module
import cssOb from './style.module.css';
export default class ComponentWithStyle extends Component {



  render() {
    return (
      <div className='container'>
        <p className='color-dark-blue'>Lorem ipsum dolor sit amet.</p>

        <p className={`${cssOb['color-red']} fs-3`}>Lorem ipsum dolor sit amet.</p>

        <p style={{fontSize:15, color:'red',margin:'10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, veniam!</p>

      </div>
    )
  }
}
