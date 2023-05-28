//rcc
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import Navigation from '../Navigation'
import BTFooter from './BTFooter'

export default class BTHomePage extends Component {
    render() {
        return (
            <div>
                <BTHeader />

                <div className='row m-0 p-0'>
                    <div className='col-6 m-0 p-0'>
                        <Navigation />
                        
                    </div>
                    <div className='col-6'>

                    </div>
                </div>
                <BTFooter />

            </div>
        )
    }
}
