import axios from 'axios';
import { courseConstants } from '../constants';
const { CREATE_COURSE } = courseConstants;
const API = `https://wbdv-generic-server.herokuapp.com/api/001040845/courses`;

// export const createCourse = course => async dispatch => {
//     try {        
//         var res = await axios.post(API, course);
//         // if (res.data.survey && !res.data.error) {
//         //     dispatch({ type: SURVEYAdd, payload: [res.data.survey] })
//         //     dispatch({ type: SURVEY_RECENT, payload: res.data.survey._id })
//         // } else {
//         //     dispatch({ type: SURVEYErr, payload: res.data.error });
//         // }
//         console.log(res)
//     } catch (e) { console.log(e) }
// };


export default class {

    static createCourse = async course => {
        const response = await axios.post(API, course);
    }

    static findAllCourses = async () => {
        const response = await axios.get(API);
        return response.data;
    }

    static findCourseById = async id => {
        const response = await axios.get(`${API}/${id}`);
        return response.data;
    }

    static updateCourse = async (id, course) => {
        const response = await axios.put(`${API}/${id}`, course);
        return response.status;
    }

    static deleteCourse = async id => {
        const response = await axios.delete(`${API}/${id}`);
        return response.status;
    }
}