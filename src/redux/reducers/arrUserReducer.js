import { stringToSlug } from "../../method/method.js";

const initialState = [
  {id: 1, name: 'Phan Thanh Long', phone: '0936124885', email: 'thanhlong@gmail.com'},
  {id: 2, name: 'Ky Giai Du', phone: '0936124885', email: 'giaidu@gmail.com'}
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_FORM': {
      const values = { ...action.payload };
      let newArrUser = [...state];
      newArrUser.push(values);
      
      return newArrUser
    }
    case 'DEL_USER': {
      let newState = [...state];
      newState = newState.filter(item => item.id !== action.payload);
      return newState;
    }
    case 'UPDATE_USER': {
      const updatedUser = { ...action.payload };
      const arrUser = [...state];
      const updatedArrUser = arrUser.map(user => {
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
   
    default:
      return state;
  }
};
