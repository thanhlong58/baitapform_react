const initialState = {
    values: {
        id: '',
        name: '',
        phone: '',
        email: ''

    },

    validations: {
        id: '(*)',
        name: '(*)',
        phone: '(*)',
        email: '(*)'


    },

    inValid: true
}

export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_FORM': {
            //values
            const { id, value, dataType, arrUser, checkId } = action.payload;
            console.log(arrUser)
            const newValues = { ...state.values, [id]: value };
            console.log(newValues)

            //validation
            const newValidations = { ...state.validations, [id]: value };



            let messageErrors = '';
            if (value.trim() === '') {
                
                messageErrors = `${id} cannot be blank!`
            } else {
                switch (dataType) {
                    case 'number': {
                        let regexNumber = /^[0-9]+$/;
                        if (!regexNumber.test(value)) {
                            messageErrors = ` ${id} must be a number`
                        }
                    }; break;

                    case "letter": {
                        let regexLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
                        if (!regexLetter.test(value)) {
                            messageErrors = `${id} must be letters`
                        }
                    }; break;
                    case "email": {
                        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!regexEmail.test(value)) {
                            messageErrors = `${id} is not valid`
                        }

                    }; break;

                }



            }


            if (checkId) {
                for (let user of arrUser) {
                    if (user.id == newValues.id) {
                        messageErrors = 'Id is already register'
                    }

                }
            }



            newValidations[id] = messageErrors

            let isInvalid = Object.values(newValidations).some((error) => error !== '');
            return { ...state, values: newValues, validations: newValidations, inValid: isInvalid };


        }

        case "RESET_FORM": {
            return initialState;
        }
        case 'UPDATE_FORM_VALUES':
            return {
                ...state,
                values: {
                    id: action.payload.id,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    email: action.payload.email,
                },
            };
         
       

        default:
            return state;
    }
};
