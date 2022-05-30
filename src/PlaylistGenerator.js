import {Link} from 'react-router-dom'
import './style/playlistGeneratorCSS.css'
import {handleLogin} from './constants/auth'

const PlaylistGenerator = () => {
  return(
  <div class="v10_428">
    <div class="v2_2">
      <div class="v3_194">
        <div class="v3_196">
        <button onClick={handleLogin}>
          Connect Playlist to Spotify
          </button>
          <button>
          <Link to="/">back button</Link> 
          </button>
        </div>
        <div class="v5_260">
          <span class="v3_240">Emo Punk</span>
          <div class="v4_114">
            <span class="v3_243">100 songs, 5 hr 5 min</span>
            <span class="v3_244">Spotify</span>
          </div>
          <span class="v3_258">PLAYLIST</span>
          <div class="v5_262"></div>
        </div>
        <div class="v5_261">
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
        <div class="name"></div>
      </div>
    </div>
  </div>
  )
  }

  export default PlaylistGenerator;