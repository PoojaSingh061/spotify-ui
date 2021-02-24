import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

import '../css/song_list.css'

function SongList({spotify, itemList}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((res) => {
              dispatch({
                type: "SET_ITEM",
                item: res.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((res) => {
              dispatch({
                type: "SET_ITEM",
                item: res.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
      <div className='song'>
            {/* <div className='icons'>
                <PlayCircleFilledIcon className='shuffleIcon' onClick={playPlaylist}/>
                <FavoriteBorderIcon fontSize='large' />
                <MoreHorizIcon />
            </div> */}
            {itemList?.tracks.items.map((item) => (
                <SongRow key={item.id} playSong={playSong} track={item.track} />
            ))}
        </div>
    )
}

export default SongList
