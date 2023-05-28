//rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //callback
    handleChangeColor = (e) => {
        // document.querySelector('#btn')
        e.target.className = "btn btn-dark";
        
    }

    
    thayDoiHoTen = (hoTenMoi) => {
        document.querySelector('#ho-ten-sv').innerHTML = hoTenMoi;
    }

    render() {
        return (
            <div className='container'>
                <button id="btn" className='btn btn-success' onClick={(e) => {
                    // document.querySelector('#btn')
                    e.target.className = "btn btn-dark";
                }}>Click me</button>
                <button className='btn btn-primary' onClick={this.handleChangeColor}>Change color</button>
                <h3 id="title">title</h3>
                <input className='my-2 form-control w-25' id="text" onInput={(e) => {
                    let { value } = e.target;
                    document.querySelector('#title').innerHTML = value;
                }} />
                <hr />
                <h3>Họ tên : <span id="ho-ten-sv"></span></h3>
                <div className='form-group'>
                    <p>Nhập vào họ tên</p>
                    <input id="txt-ho-ten" className='form-control w-25' />
                    <br />
                    <button className='my-2 btn btn-dark' onClick={(e)=> {
                        let {value} = document.querySelector('#txt-ho-ten');
                        //Gọi nhiều hàm khác trong sự kiện onclick
                        this.thayDoiHoTen(value);
                    }}>Submit</button>
                </div>


            </div>
        )
    }
}
