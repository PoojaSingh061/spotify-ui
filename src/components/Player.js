import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Artists from './Artists'
import { useDataLayerValue } from './DataLayer';
import Header from './Header'
import HomePage from './HomePage';
import Library from './Library'
import PlayerBody from './PlayerBody'
import PlayerFooter from './PlayerFooter'
import SearchCategories from './SearchCategories'
import Sidebar from './Sidebar'

import '../css/player.css';

function Player({spotify}) {
    const [{ discover_weekly, playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='player'>
            <div className='player_body'>
            <Sidebar />
            <Header />
            <Router>
                <Switch>
                    <Route exact path='/'> <HomePage /> </Route>
                    {/* <Route path='/'> <PlayerBody itemList={playlists?.items[0]} /> </Route> */}
                    <Route path='/discover_weekly'> <PlayerBody itemList={discover_weekly} /> </Route>
                    <Route path='/search' component={SearchCategories}/>
                    {/* <Route path='/' component={Library}/> */}
                    <Route path='/browse/artists' component={Artists}/>
                </Switch>
            </Router>
            <PlayerFooter spotify={spotify} />
            </div>
        </div>
    )
}

export default Player
