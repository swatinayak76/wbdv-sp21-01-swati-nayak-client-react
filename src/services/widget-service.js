import { widgetConstants } from "../constants";
import api from "../utils/api";
const {
  CREATE_WIDGET,
  GET_WIDGETS_BY_TOPIC,
  GET_WIDGETS_BY_ID,
  WIDGET_Del,
  WIDGET_Upt,
  ALL_WIDGETS
} = widgetConstants;

export const createWidget = (data, tid) => async (dispatch) => {
  try {
    var res = await api.post(`topics/${tid}/widgets`, data);
    if (res.data) {
      dispatch({ type: CREATE_WIDGET, payload: [res.data] });
    }
  } catch (e) {
    console.log(e); 
  }
};

export const findWidgetsForTopic = (id) => async (dispatch) => {
  try {
    var res = await api.get(`topics/${id}/widgets`);
    if (res.data) {
      dispatch({ type: GET_WIDGETS_BY_TOPIC, payload: res.data });
    }
  } catch (e) {
    console.log(e);
  }
};

export const findWidgetById = (id) => async (dispatch) => {
  try {
    var res = await api.get(`widgets/${id}`);
    if (res.data) {
      dispatch({ type: GET_WIDGETS_BY_ID, payload: res.data });
    }
  } catch (e) {
    console.log(e);
  }
};

export const findAllWidgets = () => async (dispatch) => {
  try {
    var res = await api.get(`topics/widgets`);
    if (res.data) {
      dispatch({ type: ALL_WIDGETS, payload: res.data });
    }
  } catch (e) {
    console.log(e);
  }
};


export const updateWidget = (data) => async (dispatch) => {
  try {
    var res = await api.put(`widgets/${data.id}`, data);
    if (res.data) {
      dispatch({ type: WIDGET_Upt, payload: data });
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteWidget = (data) => async (dispatch) => {
  try {
    var res = await api.delete(`widgets/${data.id}`);
    if (res.data) {
      dispatch({ type: WIDGET_Del, payload: data });
    }
  } catch (e) {
    console.log(e);
  }
};
