export const initialState = {
    //empty datalayer
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,
    categories: [],
    tracks: [],
    newReleases: [],
    featuredPlaylists: [],
    playlistTracks: [],
};

const reducer = (state, action) => {
    //when we push a user into datalayer, we dispatch action
    //action has type and [payload]
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_NEWRELEASES':
            return{
                ...state,
                newReleases: action.newReleases
            };
        case 'SET_PLAYLISTS': 
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_FEATUREDPLAYLISTS': 
            return{
                ...state,
                featuredPlaylists: action.featuredPlaylists,
            };
        case 'SET_TRACKS': 
            return{
                ...state,
                tracks: action.tracks,
            };
        case 'SET_CATEGORIES': 
            return{
                ...state,
                categories: action.categories,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_TOP_ARTISTS":
            return {
            ...state,
            top_artists: action.top_artists,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };        
        case "SET_PLAYLIST_TRACKS":
            return {
                ...state,
                playlistTracks: action.playlistTracks,
            };        
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
          
        default: 
           return state;
    }
}

export default reducer;