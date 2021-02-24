import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { useDataLayerValue } from './components/DataLayer';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from './spotify';


import './index.css';

const spotify = new SpotifyWebApi();

function App() {

  const [{token}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    //Remove access token from URL for security reasons
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      //getMe returns a promise
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        })
      });

      spotify.getCategories("37i9dQZEVXcD5e9ZWsHMrl").then((categories) => {
        dispatch({
          type: 'SET_CATEGORIES',
          categories,
        });
      });

      spotify.getMyTopTracks("37i9dQZEVXcD5e9ZWsHMrl").then((tracks) => {
        dispatch({
          type: 'SET_TRACKS',
          tracks,
        });
      });

      spotify.getNewReleases().then((newReleases) => {
        dispatch({
          type: 'SET_NEWRELEASES',
          newReleases,
        });
      });

      spotify.getFeaturedPlaylists().then((featuredPlaylists) => {
        dispatch({
          type: 'SET_FEATUREDPLAYLISTS',
          featuredPlaylists,
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });

     spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      

      dispatch({
        type: "SET_SPOTIFY",
        spotify,
      });

      spotify.getPlaylistTracks().then((playlistTracks) => {
        dispatch({
          type: 'SET_PLAYLIST_TRACKS',
          playlistTracks,
        })
      });


      spotify.getPlaylist("37i9dQZEVXcD5e9ZWsHMrl").then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });
    }
  }, [token, dispatch])
  return (
    <div className='App'>
      {
        /* Spotify Login Page if token doesn't exists */
        token ? <Player  spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
