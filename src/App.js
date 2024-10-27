import { useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa6'

export default function VideoPlayer() {
  const ref = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  console.log(ref.current)

  const handleClickPlay = () => {
    ref.current.play()
    setIsLoading(false)
  }

  const handleClickPause = () => {
    ref.current.pause()
    setIsLoading(true)
  }

  const handleClickRun = (e) => {
    //const videoElement = document.querySelector("#some-video");
    //videoElement.playbackRate = 2;
    if (ref.current) {
      ref.current.playbackRate = e.target.value
    }
  }

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Oynatıcı</h1>
      <video
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        ref={ref}
        controls
      />
      <div className="flex justify-between">
        <button
          className="text-orange-500 font-semibold"
          onClick={handleClickPause}
        >
          <FaPause />
          Duraklat
        </button>
        {isLoading && <div>Duraklatıldı</div>}
        <button
          className="text-indigo-500 font-semibold"
          onClick={handleClickPlay}
        >
          <FaPlay />
          Oynat
        </button>
      </div>
      <div className="flex justify-center">
        <label htmlFor="playback">Oynatma hızını seçin:</label>
        <select id="playback" defaultValue="1" onChange={handleClickRun}>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  )
}
