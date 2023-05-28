const initialState = [
    {id: 1, name : 'Phan Thành Long', phone: '0936124885', email : 'thanhlong@gmail.com' },
    {id : 2 , name : 'Kỷ Giai Dư', phone : '0936124885', email : 'giaidu@gmail.com'}
]

export default (state = initialState, action ) => {
  switch (action.type) {
    case 'REGISTER_FORM' : {
        const values = {...action.payload};
        let newArrUser = [...state];
        newArrUser.push(values);
        state = newArrUser  
  return state;

    };
    case 'DEL_USER' : {
        let newState  = [...state];
        newState = newState.filter(item => item.id !== action.payload);
        return newState;
    }

  
  default:
    return state
  }



}
