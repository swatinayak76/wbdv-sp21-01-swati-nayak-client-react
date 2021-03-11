import axios from 'axios';
const API = `https://wbdv-generic-server.herokuapp.com/api/001040845/`;

export default class {

    static createTopic = async (lessonId, topic) => {
        
        const response = await axios.post(API+`lessons/${lessonId}/topic`,topic);
        return response.data;
    }
    
    static findTopicsForLesson = async lessonId => {
        const response = await axios.get(API+`lessons/${lessonId}/topic`);
        return response.data;

    }
    static findTopic = async topicId => {
        const response = await axios.get(API+`topics/${topicId}`);
        return response.data;

    }
    
    static updateTopic = async (topicId, topic) => {
        const response = await axios.put(API+`topics/${topicId}`,topic);
        return response.status;

    }
    static deleteTopic = async topicId => {
        const response = await axios.delete(API+`topics/${topicId}`);
        return response.status;
    }

}