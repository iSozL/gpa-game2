import React, { useContext, useRef, useEffect, useState } from 'react';
import './index.scss';
import { showContext, UPDATE_SHOW, UPDATE_INDEX } from './show'
import Loading from '../components/loading'

interface IContext {
  show: {
    show?: boolean,
    index?: number,
    play?: boolean
  },
  dispatch: Function
}

const After: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const imgRef = useRef<any>()
  const {show, dispatch} = useContext<IContext>(showContext)

  useEffect(() => {
    imgRef.current.onload = () => {
      setLoading(false)
    }
  })

  return (
    <div>
      { loading ? <Loading /> : null }
        <img
          ref={imgRef}
          src="http://antelope.fun/nd.gif"
          className="paper-container" id="paper-container" 
          onClick = {() => { dispatch({ type: UPDATE_SHOW, show: { show: false, index: show.index, play: false } }); }} >
        </img>
    </div>
  )
}

export default After