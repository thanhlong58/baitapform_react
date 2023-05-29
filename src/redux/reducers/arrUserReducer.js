import { stringToSlug } from "../../method/method.js";


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

    
    
    case 'UPDATE_USER' : {
        const updatedUser  = {...action.payload};
        const arrUser = [...state];
        const updatedArrUser = arrUser.map((user) => {
          if (user.id === updatedUser.id) {
            return {
              ...user,
              ...updatedUser,
            };
          }
          return user;
        });
      
        return updatedArrUser;
    }
    case 'HANDLE_SEARCH': {
      const arrUser = [...state];
      const searchValue = stringToSlug(action.payload.toLowerCase().trim());
    
      if (searchValue === '') {
        return initialState; // Return the initial array if the search value is empty
      }
    
      const filteredUsers = arrUser.filter(user =>
        stringToSlug(user.name.toLowerCase()).includes(searchValue)
      );
    
      if (filteredUsers.length === 0) {
        return arrUser; // Return the original array if no matching users found
      }
    
      return filteredUsers;
    }
  default:
    return state
  }
   


}
