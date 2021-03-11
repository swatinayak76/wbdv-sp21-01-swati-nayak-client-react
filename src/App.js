import CourseManager from './components/course-manager';
import Header from './components/Header';
import CourseEditor from './components/course-editor/course-editor';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, perssistor } from './reducer/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={perssistor}>
        <BrowserRouter>
          <Switch>
            <Route
              path='/courses'
              render={(props) => <CourseManager {...props} />}
            />
            <Route
              path={`courses/:layout/edit`}
              render={(props) => <CourseEditor {...props} />}
            />
            <Redirect push to='/courses/table' />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
