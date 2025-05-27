import {
  updateUser,
  userApi,
  toRegisterUser,
  logInUser,
  logOutUser,
  authChecked
} from './UserInfoSlice';
import slice from './UserInfoSlice';
const reducer = slice.reducer;

const test_user = {
  name: 'senya',
  email: 'senya@krasotkin'
};

describe('Проверка UserSlice', () => {
  const initialState = {
    isAuthChecked: false,
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false
  };

  it('Проверка initialState', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('Установка loading=true при updateUser.pending', () => {
    const action = { type: updateUser.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Установка данных и loading=false при updateUser.fulfilled', () => {
    const mockPayload = { user: test_user };

    const action = { type: updateUser.fulfilled.type, payload: mockPayload };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockPayload.user);
  });

  it('Установка ошибки и loading=false при updateUser.rejected', () => {
    const action = {
      type: updateUser.rejected.type,
      error: { message: 'error' }
    };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('error');
  });

  it('Установка loading=true при userApi.pending', () => {
    const action = { type: userApi.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Установка данных и loading=false при userApi.fulfilled', () => {
    const mockPayload = { user: test_user };

    const action = { type: userApi.fulfilled.type, payload: mockPayload };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockPayload.user);
  });

  it('Установка ошибки и loading=false при userApi.rejected', () => {
    const action = { type: userApi.rejected.type, error: { message: 'error' } };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('error');
  });

  it('Установка loading=true при toRegisterUser.pending', () => {
    const action = { type: toRegisterUser.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Установка данных и loading=false при toRegisterUser.fulfilled', () => {
    const mockPayload = test_user;

    const action = {
      type: toRegisterUser.fulfilled.type,
      payload: mockPayload
    };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockPayload);
  });

  it('Установка ошибки и loading=false при toRegisterUser.rejected', () => {
    const action = {
      type: toRegisterUser.rejected.type,
      error: { message: 'error' }
    };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('error');
  });

  //logInUser
  it('Установка loading=true при logInUser.pending', () => {
    const action = { type: logInUser.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Установка данных и loading=false при logInUser.fulfilled', () => {
    const mockPayload = test_user;

    const action = { type: logInUser.fulfilled.type, payload: mockPayload };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockPayload);
  });

  it('Установка ошибки и loading=false при logInUser.rejected', () => {
    const action = {
      type: logInUser.rejected.type,
      error: { message: 'error' }
    };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('error');
  });

  it('Установка loading=true при logOutUser.pending', () => {
    const action = { type: logOutUser.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('Установка данных и loading=false при logOutUser.fulfilled', () => {
    const action = { type: logOutUser.fulfilled.type };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.user).toBeNull();
  });

  it('Установка ошибки и loading=false при logOutUser.rejected', () => {
    const action = {
      type: logOutUser.rejected.type,
      error: { message: 'error' }
    };
    const state = reducer({ ...initialState, loading: true }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('error');
  });

  it('authChecked', () => {
    const state = reducer(initialState, authChecked());
    expect(state.isAuthChecked).toBe(true);
  });
});
