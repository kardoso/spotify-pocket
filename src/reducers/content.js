import {
  ADD_PLAYER_TRACK,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORY_PLAYLIST_REQUEST,
  GET_CATEGORY_PLAYLIST_SUCCESS,
  GET_CATEGORY_PLAYLIST_FAILED,
  GET_PLAYLIST_TRACKS_REQUEST,
  GET_PLAYLIST_TRACKS_SUCCESS,
  GET_PLAYLIST_TRACKS_FAILED,
  REMOVE_PLAYER_TRACK,
  SET_PLAYER_HEIGHT,
} from "../actions/content";

const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  errorMessage: "",
};

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: payload.id,
        playingNowTrack: payload,
      };
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        status: "running",
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        errorMessage: "",
        categories: payload,
        status: "success",
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
        errorMessage: payload.message,
        status: "error",
      };
    case GET_CATEGORY_PLAYLIST_REQUEST:
      return {
        ...state,
        playlists: [],
        status: "running",
      };
    case GET_CATEGORY_PLAYLIST_SUCCESS:
      return {
        ...state,
        errorMessage: "",
        playlists: payload,
        status: "success",
      };
    case GET_CATEGORY_PLAYLIST_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        playlists: [],
        status: "error",
      };
    case GET_PLAYLIST_TRACKS_REQUEST:
      return {
        ...state,
        tracks: [],
        status: "running",
      };
    case GET_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        errorMessage: "",
        tracks: payload.filter(({ track }) => track),
        status: "success",
      };
    case GET_PLAYLIST_TRACKS_FAILED:
      return {
        ...state,
        tracks: [],
        errorMessage: payload.message,
        status: "error",
      };
    case REMOVE_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
        playerHeight: 0,
      };
    case SET_PLAYER_HEIGHT:
      return {
        ...state,
        playerHeight: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
