import React, {Component} from 'react';
import Navigation from './Navigation';


export default class Card extends Component {



    render() {
        //Nội dung class component sẽ chứa trong return của phương thức render
        return <div className='card'>
            <Navigation />
            <img src='https://i.pravatar.cc?u=5' alt="..." />
            <div className='card-body'>
                <h3>Name: Quân Mentor</h3>
                <p>Age: 40</p>
            </div>
        </div>
    } 
}


