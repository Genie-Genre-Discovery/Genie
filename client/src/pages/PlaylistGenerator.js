import {Link} from 'react-router-dom'
import '../style/playlistGeneratorCSS.css'
import {AUTH, CLIENT_ID, REDIRECT_URI, SCOPES_URL_PARAM, RESPONSE_TYPE} from '../constants/AccountInfo'

const PlaylistGenerator = () => {

  const handleLogin = () => {
    window.location = `${AUTH}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
  };

  return(
  <div class="v10_428">
    <div class="v2_2">
      <div class="v3_194">
        <div class="background">
        <button onClick={handleLogin}>
          Connect Playlist to Spotify
          </button>
          <button>
          <Link to="/">back button</Link> 
          </button>
        </div>
        <div class="playlistTitlebox">
          <span class="playlistName">Pop Right Now</span>
          <div class="playlistInfo">
            <span class="playlistLength">100 songs, 5 hr 5 min</span>
            <span class="playlistProgram">Spotify</span>
          </div>
          <span class="playlistPLAYLIST">PLAYLIST</span>
          <div class="playlistImage"></div>
        </div>
        <div class="playlistContainer">
          <div class="v3_271">
            <div class="name"></div>
            <span class="v3_273">#</span>
            <span class="v3_274">TITLE</span>
            <span class="v3_275">ALBUM</span>
            <span class="v3_276">DATE ADDED</span>
            <div class="name"></div>
          </div>
          <div class="v3_460">
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
  )
  }

  export default PlaylistGenerator;