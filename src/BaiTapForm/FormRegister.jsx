import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'

 class FormRegister extends  Component {

   
  handleChange = (e) => {
   let checkId = e.target.getAttribute('check-id')

   
   console.log(checkId)
   let dataType = e.target.getAttribute('data-type')
   const {value,id} = e.target
   const {arrUser} = this.props;
   console.log(arrUser)
  
   const action = {
    type : 'HANDLE_FORM',
    payload : {
        id : id ,
        value : value,
        dataType ,
        arrUser,
        checkId
       
        
    }
   };

   

   this.props.dispatch(action);
   
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userEdit !== this.props.userEdit) {
      const { id, name, phone, email } = this.props.userEdit;
  
      this.props.dispatch({
        type: 'UPDATE_FORM_VALUES',
        payload: {
          id,
          name,
          phone,
          email,
        },
      });
    }
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
                      <input   disabled = {this.props.inputDisabled}  check-id='id' data-type = 'number' className='form-control' id='id' name='id' value={id} onChange={this.handleChange} />
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
                      <input   data-phone='phone' data-type = 'number' className='form-control' id='phone' name='phone' value={phone }  onChange={this.handleChange} />
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
            <button className='btn btn-success mx-2' disabled={this.props.inValid} >Add</button>
            <button   disabled={this.props.btnUpdateDisabled}  id="btnUpdate" className='btn btn-primary mx-2' type='button' onClick={()=>{
             
              this.props.updateUser(this.props.userRegister);
              this.resetForm()
              
            }}>Update</button>

        </div>
      </form>
    )
  }


 
}

const mapStateToProps = (state) => ({
    userRegister : state.userRegisterReducer.values,
    validation  : state.userRegisterReducer.validations,
    inValid : state.userRegisterReducer.inValid

    
})



export default connect(mapStateToProps)(FormRegister)