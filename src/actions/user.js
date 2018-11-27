import { addError } from './errors'
import { login as logUserIn, logout as logUserOut, JWT_STORAGE_NAME, getTokenUser } from '../api/user';
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const setUser = user => ({
  type: USER_LOGIN,
  user: user
})

export const clearUser = () => ({
  type: USER_LOGOUT
})

export const login = ({userName, password, remember}) => async (dispatch, getState) => {
  alert(JSON.stringify(userName))
  const response = await logUserIn(userName, password, remember)
  if (response.ok) {
    const user = await response.json()
    alert(JSON.stringify(user))
    const jwt = user.token
    sessionStorage.setItem(JWT_STORAGE_NAME, jwt);
    if (remember) {
      localStorage.setItem(JWT_STORAGE_NAME, jwt);
    }
    dispatch(setUser(getTokenUser(jwt)))
  } else {
    
    dispatch(addError(response))
  }
}

export const logout = () => async (dispatch, getState) => {
  logUserOut()
  dispatch(clearUser())
}