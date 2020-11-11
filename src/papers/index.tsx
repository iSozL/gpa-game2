import React, {useRef, useEffect, useReducer, useState} from 'react';
import SuperGif from '../utils/gifControl/libgif';
import Loading from '../components/loading'
import './index.scss'

interface IAction {
  type: string,
  data: any
}
const Papers: React.FC = () => {
  const reducer = (state: any, action: IAction) => {
    if (action.type === 'change') {
      return action.data
    }
  }
  const [loading, setLoading] = useState<boolean>(true)
  const [sup, dispatch] = useReducer<any>(reducer, null) 
  const imgRef = useRef<any>()
  const test = () => {
    sup.play()
    setTimeout(() => {
      sup.pause()
    }, 3700)
  }
  useEffect(() => {
    let sup1 = SuperGif({gif: imgRef.current})
    dispatch({type: 'change', data: sup1})
    sup1.load(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh"}}>
      {/* {loading ? <Loading /> : ""} */}
      <div>
        <img ref={imgRef} className="paper-container" src="http://antelope.fun/paperbg.jpg" id="http://antelope.fun/nd.gif" alt="0" />
      </div>
    </div>
  )
}

export default Papers