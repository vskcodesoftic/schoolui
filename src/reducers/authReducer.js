import { IS_AUTHENTICATED } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userRole : 'none',
  authenticated : false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload ,
        userRole : action.userRoleType,
        authenticated : action.isAuth
      };
    default:
      return state;
  }
}
