import axios from 'axios';
const API = `https://wbdv-generic-server.herokuapp.com/api/001040845/`;

export default class {

    static createModule = async (courseId, module) => {
        const response = await axios.post(API+`courses/${courseId}/modules`, module);
        return response.data;
    }
    static findModulesForCourse = async courseId => {
        const response = await axios.get(API+`courses/${courseId}/modules`);
        return response.data;

    }
    static findModule = async moduleId => {
        const response = await axios.get(API+`modules/${moduleId}`);
        return response.data;

    }
    static updateModule = async (moduleId,module) => {
        const response = await axios.put(API+`modules/${moduleId}`,module);
        return response.status;

    }
    static deleteModule = async moduleId => {
        const response = await axios.delete(API+`modules/${moduleId}`);
        return response.status;
    }

}