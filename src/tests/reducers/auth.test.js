import authReducer from '../../reducers/auth';

test('should return auth state with userID on login', () => {
  const id = '34ac3f34ab';
  const action = {
    type: 'LOGIN',
    uid: id
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: id
  });
});

test('should return empty auth state on logout', () => {
  const id = '34ac3f34ab';
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: id}, action);
  expect(state).toEqual({});
});
