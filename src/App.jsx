
import { Introduction } from './components/introdução'
import { Fotosandvideos } from './components/fotosandvideos'
import videoFinal from './assets/videoFinal.mp4'


import './global.css'
export function App() {

  return (
    <div>
      <Introduction />
      <Fotosandvideos />
      <video controls>
        <source src={videoFinal}  type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}
