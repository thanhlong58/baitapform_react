import React, { Component } from 'react'

export default class Databinding extends Component {

    lopHoc = 'Bootcamp 45';

    renderCard = () => {
        
        //Lưu ý: Để binding 1 hàm thì giá trị trả về của hàm đó sẽ là : number,string,boolean, jsx
        return <div className='card w-25'>
            <img src='https://i.pravatar.cc?u=9'  alt='...' />
            <div className='card-body'>
                Lớp: {this.lopHoc}
            </div>
        </div>
    }

    render() {
        const hoTen = 'Nguyễn Văn A';
        const linkAnh = 'https://picsum.photos/200/200';
        

        // document.querySelector('#ho-ten').innerHTML = hoTen;

        return (
            <div className='container'>
                <h3 id="ho-ten">Họ tên: {hoTen}</h3>
                <h3>Lớp học: {this.lopHoc}</h3>
                <img className='w-25 mt-2' src={linkAnh} alt='...' /> 
                <input className='form-control w-25 mt-2' value={hoTen} />

                {this.renderCard()}

            </div>
        )
    }
}
