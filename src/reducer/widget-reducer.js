import { widgetConstants } from "../constants";
const {
  CREATE_WIDGET,
  GET_WIDGETS_BY_TOPIC,
  GET_WIDGETS_BY_ID,
  WIDGET_Del,
  WIDGET_Upt,
  ALL_WIDGETS,
} = widgetConstants;
const initialState = { data: [], widget_by_id: {} };

export const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WIDGET:
      return {
        ...state,
        data: action.payload.concat(state.data),
      };
    case GET_WIDGETS_BY_TOPIC:
      return {
        ...state,
        data: action.payload,
      };
    case GET_WIDGETS_BY_ID:
      return {
        ...state,
        widget_by_id: action.payload,
      };
    case ALL_WIDGETS:
      return {
        ...state,
        data: action.payload,
      };
    case WIDGET_Del:
      return {
        ...state,
        data: state.data.filter((w) => w.id !== action.payload.id),
      };
    case WIDGET_Upt:
      return {
        ...state,
        data: state.data.map((w) => {
          if (w.id === action.payload.id) w = action.payload;
          return w;
        }),
      };
    default:
      return state;
  }
};
