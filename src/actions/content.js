export const ADD_PLAYER_TRACK = "ADD_PLAYER_TRACK";
export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILED = "GET_CATEGORIES_FAILED";
export const GET_CATEGORY_PLAYLIST_REQUEST = "GET_CATEGORY_PLAYLIST_REQUEST";
export const GET_CATEGORY_PLAYLIST_SUCCESS = "GET_CATEGORY_PLAYLIST_SUCCESS";
export const GET_CATEGORY_PLAYLIST_FAILED = "GET_CATEGORY_PLAYLIST_FAILED";
export const GET_PLAYLIST_TRACKS_REQUEST = "GET_PLAYLIST_TRACKS_REQUEST";
export const GET_PLAYLIST_TRACKS_SUCCESS = "GET_PLAYLIST_TRACKS_SUCCESS";
export const GET_PLAYLIST_TRACKS_FAILED = "GET_CATEGORY_PLAYLIST_FAILED";
export const REMOVE_PLAYER_TRACK = "REMOVE_PLAYER_TRACK";
export const SET_PLAYER_HEIGHT = "SET_PLAYER_HEIGHT";

export const addTrackToPlayer = (track) => ({
  type: ADD_PLAYER_TRACK,
  payload: track,
});

export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = ({ categories }) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
};

export const getCategoriesFailed = ({ message }) => ({
  type: GET_CATEGORIES_FAILED,
  payload: { message },
});

export const getCategoryPlaylistRequest = () => ({
  type: GET_CATEGORY_PLAYLIST_REQUEST,
});

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
});

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
});

export const getPlaylistTracksRequest = () => ({
  type: GET_PLAYLIST_TRACKS_REQUEST,
});

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

export const getPlaylistTracksFailed = ({ message }) => ({
  type: GET_PLAYLIST_TRACKS_FAILED,
  payload: { message },
});

export const removeTrackToPlayer = () => ({
  type: REMOVE_PLAYER_TRACK,
});

export const setPlayerHeight = (height) => ({
  type: SET_PLAYER_HEIGHT,
  payload: height,
});
