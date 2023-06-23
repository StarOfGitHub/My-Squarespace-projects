/* eslint-disable no-console */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { isTokenExpired } from '../../services/utils/jwtHelper';

const getProfileOrNull = () => {
  const token = localStorage.getItem('id_token');
  let profile = null;
  if (!!token && !isTokenExpired(token)) {
    try {
      profile = JSON.parse(localStorage.getItem('profile'));
    } catch (e) {
      console.error('ERROR: Could not parse cached Profile.: \n', e);
      profile = null;
    }
  }
  return profile;
};

const { Types, Creators } = createActions({
  ageVerified: null,
  saveUser: ['profile'],
  removeProfile: null,
  saveLoginType: ['socialType'],
  fetchUserProfile: ['id'],
  addToReduxProfileCart: ['cart'],
});

export const userTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable({
  profile: getProfileOrNull(),
  ageVerified: !!localStorage.getItem('ageVerified'),
  socialLoginType: localStorage.getItem('socialType'),
});

const saveUser = (state, { profile }) => {
  localStorage.setItem('profile', JSON.stringify(profile));
  return ({
    ...state,
    profile,
  });
};

const removeProfile = state => ({
  ...state,
  profile: null,
  socialLoginType: null,
});

const verified = (state) => {
  localStorage.setItem('ageVerified', true);
  return ({
    ...state,
    ageVerified: true,
  });
};
const saveLoginType = (state, { socialType }) => {
  localStorage.setItem('socialType', socialType);
  return ({
    ...state,
    socialLoginType: socialType,
  });
};

const addToReduxProfileCart = (state, { cart }) => ({
  ...state,
  profile: {
    ...state.profile,
    shopping: {
      ...state.profile.shopping,
      cart: [...cart],
    },
  },
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.AGE_VERIFIED]: verified,
  [Types.SAVE_USER]: saveUser,
  [Types.REMOVE_PROFILE]: removeProfile,
  [Types.SAVE_LOGIN_TYPE]: saveLoginType,
  [Types.ADD_TO_REDUX_PROFILE_CART]: addToReduxProfileCart,
});
