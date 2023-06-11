import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import LoginScreen from './screens/LoginScreen';
import LocationAccess from './screens/LocationAccess';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Provider store={store}>
      {<LoginScreen /> && 
      <LocationAccess />}
    </Provider>
  );
};

export default App;
