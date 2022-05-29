import {useState} from 'react'
import { genre_word_1, genre_word_2 } from './genres';
import {Link} from 'react-router-dom'
import './style/genreGeneratorCSS.css'
var finalGenre;
var genre1, genre2;

const GenreGenerator = () => {
  const [text, setText] = useState("Emo Punk")
  const generateGenre = () => {

    genre1 = genre_word_1[Math.floor(Math.random()*genre_word_1.length)]
    genre2 = genre_word_2[Math.floor(Math.random()*genre_word_2.length)]
    while(genre1 === genre2) {
        genre2 = genre_word_2[Math.floor(Math.random()*genre_word_2.length)]
    }
    finalGenre = genre1 + " " + genre2
  }

  return(
      <div class="v4_117">
        <div class="v4_118">
          <span class="v4_124">GENIE</span>
            <div class="v12_154">
              <button onClick ={() => {
              generateGenre()
              setText(finalGenre)          
        }}>
               Generate
              </button>
          </div>
            <span class="v4_120">{text}</span>
            <div class="v5_256"/>
            <div class="v12_156">
              <button>
                <Link to="/playlist">Create Playlist</Link>
              </button>
            </div>
        </div>
      </div>
  )
}

export default GenreGenerator;