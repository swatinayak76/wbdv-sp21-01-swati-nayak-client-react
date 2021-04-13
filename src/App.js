import React, {useState, useEffect} from 'react';
// import CourseManager from './components/course-manager';
// import Header from "./components/Header";
import CourseTable from "./components/course-table/course-table";
import CourseGrid from "./components/course-grid/course-grid";
import CourseEditor from './components/course-editor/course-editor';
import AllQuizzes from './quiz/AllQuiz'
import Questions from './quiz/Question'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import service from './services/course-service';
import {store,perssistor} from './reducer/store';
import {Provider} from 'react-redux'

function App() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        reloadCourses();
    }, []);

    const reloadCourses = async () => {
        const data = await service.findAllCourses();
        setCourses(data);
    }

    return (
        <Provider store={store}>
      <PersistGate persistor={perssistor}> 
        <BrowserRouter>
            <Redirect push to="/courses/table"/>
            <Switch>
                <Route path="/courses/table" exact component={CourseTable}/>
                <Route path="/courses/grid" exact component={CourseGrid}/>
                <Route path="/quiz" exact component={AllQuizzes}/>
                <Route path="/question/:title/:quizId" exact component={Questions}/>


                <Route path="/courses/table/edit/:courseId" exact={true} render={props => <CourseEditor {...props}/>}/>
                <Route path="/courses/grid/edit/:courseId" exact={true} render={props => <CourseEditor {...props}/>}/>
                <Route path="/courses/grid/edit/:courseId/modules/:moduleId" exact={true} render={props => <CourseEditor {...props}/>}/>
                <Route path="/courses/grid/edit/:courseId/modules/:moduleId/lessons/:lessonId" exact={true} render={props => <CourseEditor {...props}/>}/>
                <Route path="/courses/table/edit/:courseId/modules/:moduleId" exact={true} render={props => <CourseEditor {...props}/>}/>
                <Route path="/courses/table/edit/:courseId/modules/:moduleId/lessons/:lessonId" exact={true} render={props => <CourseEditor {...props}/>}/>
            </Switch>
        </BrowserRouter>
        </PersistGate>
    </Provider>
    );
}

export default App;
