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
  inputDisabled : false ,
  searchValue: '',
  updateButtonDisabled: true // New state variable

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
            inputDisabled : false,
            updateButtonDisabled: true 
        })
      };

      handleSearch = (e) => {
        const value = e.target.value;
        this.setState({
          searchValue: value
        });
      }
   
    render() {
        return (
            <div className='container pt-5'>
              <FormRegister   btnUpdateDisabled={this.state.updateButtonDisabled}  inputDisabled={this.state.inputDisabled} arrUser={this.props.arrUser} userEdit={this.state.userEdit} updateUser={this.updateUser} />
              <input id='search' className='mt-5' onChange={this.handleSearch} type="text" placeholder="Search..." />
        
              <table className='table'>
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
                  {this.props.arrUser
                    .filter(user => user.name.toLowerCase().includes(this.state.searchValue.toLowerCase().trim()))
                    .map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>
                            <button className='btn btn-danger mx-2' onClick={() => {
                              const action = {
                                type: 'DEL_USER',
                                payload: item.id
                              };
                              this.props.dispatch(action);
                            }}>
                              <i className="fa fa-trash"></i>
                            </button>
        
                            <button id="btnEdit" className='btn btn-primary' onClick={() => {
                              this.editUser(item);
                              this.setState({
                                inputDisabled: true,
                                updateButtonDisabled: false
                              });
                            }}>
                              <i className="fa fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                 
                </tbody>
              </table>
            </div>
          );
        
    }
}

const mapStateToProps = (state) => ({
    arrUser: state.arrUserReducer
})



export default connect(mapStateToProps)(BaiTapForm)