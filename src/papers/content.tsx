import React, {useContext} from 'react';
import Before from './before';
import After from './after';
import { showContext } from './show';


const Content: React.FC = () => {
  const { show } = useContext<any>(showContext)
  return (
    <div>
      { show.show ? <After /> : <Before />}
    </div>
  )
}

export default Content