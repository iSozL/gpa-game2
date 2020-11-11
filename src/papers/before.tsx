import React, { useContext } from 'react';
import './index.scss';
import { showContext, UPDATE_SHOW, UPDATE_INDEX } from './show'

interface IContext {
  show: {
    show?: boolean,
    index?: number,
    play?: boolean
  },
  dispatch: Function
}

const Before: React.FC = () => {
  const {show, dispatch} = useContext<IContext>(showContext)

  return (
    <div className="flip" id="flip">
      <div className="paper-before" id="paper-before">
        <div className="click" onClick={() => { dispatch({ type: UPDATE_SHOW, show: { show: true, index: show.index, play: true } }); }}>
        </div>
        {/* {show.index > 0 ? <img id="before" className="sway" src={require("../assets/imgs/yaozhui.png")} onClick={flip}></img> : ""} */}
      </div>
      {/* <div className="puzzle-after" id="unflip">
        <div className="puzzle-flip">
          {show.index > 0 ? <img className="puzzle-bg" src={`http://antelope.fun/${paper[show.index - 1].id}.png`} /> : ""}
          <img className="back" src={require("../assets/imgs/back.png")} />
        </div>
      </div> */}
    </div>
  )
}

export default Before