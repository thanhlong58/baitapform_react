import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormRegister from './FormRegister'

class BaiTapForm extends Component {
    state = {
  userEdit: {
    id: '',
    name: '',
    phone: '',
    email: ''
  },
  inputDisabled : false 
}
    editUser  =  (userClick) => {
        this.setState ({
            userEdit : userClick
        })
    }
    updateUser = (updatedUser) => {
        
        const action = {
          type: 'UPDATE_USER',
          payload:  updatedUser
        };
        this.props.dispatch(action);
        this.setState ({
            inputDisabled : false
        })
      };


    handleSearch = (e)  => {
        const value = e.target.value;
        const action = {
            type : 'HANDLE_SEARCH',
            payload : value
        }

        this.props.dispatch(action)
    }

   
    render() {
        return (
            <div className='container pt-5'>
               
                <FormRegister inputDisabled = {this.state.inputDisabled} arrUser = {this.props.arrUser}  userEdit = {this.state.userEdit}   updateUser={this.updateUser}/>

                
                    <input onInput={this.handleSearch} type="text"  placeholder="Search..." />


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
                                       this.setState ({
                                        inputDisabled : true
                                       })
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