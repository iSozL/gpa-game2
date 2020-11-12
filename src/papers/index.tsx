import React, {useRef, useEffect, useState} from 'react';
import Loading from '../components/loading'
import './index.scss'

const Papers: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const imgRef = useRef<any>()
  const change = () => {
    setLoading(true)
    imgRef.current.src = "http://antelope.fun/nd.gif"
    imgRef.current.onload = () => {
      setLoading(false)
    }
  }
  useEffect(() => {
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
      {loading ? <Loading /> : ""}
      <div>
        <img ref={imgRef} className="paper-container" src="http://antelope.fun/paperbg.jpg" onClick={change} />
      </div>
    </div>
  )
}

export default Papers