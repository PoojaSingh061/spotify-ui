import React, {useEffect} from 'react'

import { useDataLayerValue } from './DataLayer';

import { Grid, Slider } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import '../css/player_footer.css'

function PlayerFooter({spotify}) {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((res) => {

      dispatch({
        type: "SET_PLAYING",
        playing: res.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <div className='footer'>
      {/* Album and song details */}
      <div className='footerLeft'>
        <img src={item?.album.images[0].url} alt={item?.name} />
          {item ? (
            <div className='songDetails'>
              <h5>{item.name}</h5>
              <h6>{item.artists.map((artist) => artist.name).join(", ")}</h6>
            </div>
          ) : (
            <div className='songDetails'>
              <h5>Currently Playing Song Title</h5>
              <h6>Artist</h6>
            </div>
          )}
        <FavoriteBorderIcon fontSize='small' className='footerGreen' />
      </div>
      {/* Player controls */}
      <div className='footerCenter'>
        <ShuffleIcon className='footerGreen' fontSize='small' />
        <SkipPreviousIcon className='footerIcon' onClick={skipNext} />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footerIcon"
          />
          ) : (
          <PlayCircleOutlineIcon onClick={handlePlayPause} className='footerIcon' fontSize='large' />
        )}
        <SkipNextIcon className='footerIcon' onClick={skipPrevious} />
        <RepeatIcon className='footerGreen' fontSize='small' />
      </div>
      {/* Volume control */}
      <div className='footerRight'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' color='primary'/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PlayerFooter
