import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut();
  };
};