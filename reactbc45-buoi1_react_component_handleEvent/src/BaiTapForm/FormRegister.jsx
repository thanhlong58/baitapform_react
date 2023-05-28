import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'

 class FormRegister extends  Component {
  handleChange = (e) => {
   let checkValid = e.target.getAttribute('check-valid');
   let dataType = e.target.getAttribute('data-type')
   const {value,id} = e.target
   const action = {
    type : 'HANDLE_FORM',
    payload : {
        id : id ,
        value : value,
        dataType ,
        checkValid   
        
    }
   };

   

   this.props.dispatch(action);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values =  this.props.userRegister
    
    const action =  {
        type  : 'REGISTER_FORM',
        payload : values
    }

    this.props.dispatch(action);
   
 this.resetForm();
    
  }

  resetForm = () => {
    this.props.dispatch({ type: 'RESET_FORM' });
  }

 
  
  



  render() {
    console.log(this.props)
    const {id,name,phone,email} = this.props.userRegister;
    
    
    return (
      <form id='form' className='card' onSubmit={this.handleSubmit}>
        <div className='card-header bg-dark text-white'>
            <h3 className='text-center'>Form Register</h3>
        </div>
        <div className='card-body'>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                       <p>ID</p>
                      <input data-type = 'number' className='form-control' id='id' name='id' value={id} onChange={this.handleChange} />
                      <p className='text-danger'>{this.props.validation.id}</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Full name</p>
                        <input data-type= 'letter' className='form-control' id='name' name='name' value= {name }  onChange={this.handleChange} />
                        <p className='text-danger'>{this.props.validation.name}</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                       <p>Phone</p>
                      <input check-valid='phone' data-type = 'number' className='form-control' id='phone' name='phone' value={phone }  onChange={this.handleChange} />
                      <p className='text-danger'>{this.props.validation.phone}</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Email</p>
                        <input data-type = 'email' className='form-control' id='email' name='email' value={email}  onChange={this.handleChange} />
                        <p className='text-danger'>{this.props.validation.email}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-footer'>
            <button className='btn btn-success mx-2' >Add</button>
            <button className='btn btn-primary mx-2' type='button' >Update</button>

        </div>
      </form>
    )
  }


 
}

const mapStateToProps = (state) => ({
    userRegister : state.userRegisterReducer.values,
    validation  : state.userRegisterReducer.validations

    
})



export default connect(mapStateToProps)(FormRegister)