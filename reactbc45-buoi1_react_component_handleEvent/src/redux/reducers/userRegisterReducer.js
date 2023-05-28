const initialState = {
    values : {
        id: '', 
        name : '',
        phone : '',
        email : ''

    },

    validations : {
        id : '(*)',
        name : '(*)',
        phone : '(*)',
        email : '(*)'


    }
}

export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'HANDLE_FORM': {
        //values
        const { id, value,dataType,checkValid } = action.payload;
        const newValues = { ...state.values, [id]: value };

        //validation
        const newValidations = {...state.validations, [id]: value};
        let messageErrors  = '';
        if (value.trim()=== '') {
            messageErrors = `${id} cannot be blank!`
        }else {
            switch (dataType) {
                case 'number' :  {
                    let regexNumber  = /^[0-9]+$/;
                    if ( !regexNumber.test(value)) {
                        messageErrors = `${id} must be a number`
                    }
                };break;
                
                case "letter" : {
                    let regexLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
                    if( !regexLetter.test(value)) {
                        messageErrors = `${id} must be letters`
                    }
                };break;
                case "email" : {
                    let regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!regexEmail.test(value)) {
                        messageErrors= `${id} is not valid`
                    }

                };break;
                
            }

            // if (checkValid) {
            //     let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            //     if(!regexPhone.test(value)) {
            //         messageErrors = `${id} is not valid`
            //     }
            // }

            
        }

         newValidations[id] = messageErrors
        
        return { ...state, values: newValues, validations: newValidations };
      }

      case "RESET_FORM": {
        return initialState;
      }
      
      default:
        return state;
    }
  };
  