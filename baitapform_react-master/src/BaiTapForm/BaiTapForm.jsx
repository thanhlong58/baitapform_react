import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormRegister from './FormRegister'

class BaiTapForm extends Component {
    state = {
        userEdit : {
            id : '',
            name : '',
            phone : '',
            email : ''
        }
    }

    editUser  =  (userClick) => {
        this.setState ({
            userEdit : userClick
        })
    }

   
    render() {
        return (
            <div className='container pt-5'>
               
                <FormRegister arrUser = {this.props.arrUser}  userEdit = {this.state.userEdit} />

                <form action="/search" method="GET" className='my-5' >
                    <input type="text" name="query" placeholder="Search..." />
                    <input type="submit" defaultValue="Search" />
                </form>

                <table className='table  mt-5'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.arrUser.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td> {item.phone} </td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-danger mx-2' onClick={() => {
                                        const action = {
                                            type: 'DEL_USER',
                                            payload: item.id
                                        }
                                        this.props.dispatch(action)
                                    }}>
                                        <i class="fa fa-trash"></i>
                                    </button>

                                    <button id="btnEdit" className='btn btn-primary' onClick={()=>{
                                        console.log(item);
                                        console.log(124253)
                                        this.editUser(item)
                                    }}>
                                        <i class="fa fa-edit"></i>
                                    </button>
                                </td>

                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrUser: state.arrUserReducer
})



export default connect(mapStateToProps)(BaiTapForm)