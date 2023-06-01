//rcc (react class component)
import React, { Component } from 'react'
import BTHomePage from './Components/BTHomePage/BTHomePage'
import Databinding from './Databinding/Databinding'
import HandleEvent from './HandleEvent/HandleEvent'
import ComponentWithStyle from './ComponentWithStyle/ComponentWithStyle'
//css
import './assets/styles/styles.css'
import BaiTapForm from './BaiTapForm/BaiTapForm'

export default class App extends Component {

    render() {
        return (
            <div>
                {/* <BTHomePage /> */}
                {/* <Databinding /> */}
                {/* <HandleEvent /> */}
                {/* <ComponentWithStyle /> */}
                {/* <p className='color-dark-blue'>123</p> */}
                <BaiTapForm/>
                
            </div>
        )
    }
}
