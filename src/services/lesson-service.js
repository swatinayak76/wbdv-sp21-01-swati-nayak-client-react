import axios from 'axios';
const API = `https://wbdv-generic-server.herokuapp.com/api/001040845/`;

export default class {

    static createLesson = async (moduleId, lesson) => {

        const response = await axios.post(API+`modules/${moduleId}/lessons`, lesson);
        return response.data;
    }
    static findLessonForModule = async moduleId => {
        const response = await axios.get(API+`modules/${moduleId}/lessons`);
        return response.data;

    }
    static findLesson = async lessonId => {
        const response = await axios.get(API+`lessons/${lessonId}`);
        return response.data;

    }
    static updateLesson = async (lessonId,lesson) => {
        
        const response = await axios.put(API+`lessons/${lessonId}`,lesson);
        return response.status;

    }
    static deletelesson = async lessonId => {
        const response = await axios.delete(API+`lessons/${lessonId}`);
        return response.status;
    }

}