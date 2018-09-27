import { login, logout } from '../../actions/auth';

test('should return login action object with provided userID', () => {
  const id = 'wef345sdfg';
  const action = login(id);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: id
  });
});

test('should return logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
