import React, {useEffect, useState} from 'react';
import sumData from '../utils/sumData'
import './index.scss'
import Loading from '../components/loading'
import { Link } from 'react-router-dom' 

const opp: number = Math.round(Math.round(Math.random() * 20 + 10) / 10)
let imgs:any[] = []
const Characters: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    (async function() {
      imgs = await sumData();
      setLoading(false);
    })()
  })
  return (
    <div>
      {loading ? <Loading /> : ""}
      <div className="characters-container">
        <img src={imgs[opp]} className="characters-container" id="char" />
        <Link to="/letter" className="get">点击获取小家园的信</Link>
      </div>
    </div>
  )
}

export default Characters