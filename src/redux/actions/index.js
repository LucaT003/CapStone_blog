export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGN= "SIGN";


export const signAction = (user) => ({
  type: SIGN,
  payload: user
})

export const loginAction = (user) => ({
  type: LOGIN,
  payload: user
})


export const logoutAction = () => ({
    type: LOGOUT,
    payload: {
      username: null,
      id: null,
      token: null
    }
})