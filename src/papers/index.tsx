import React from 'react';
import { Show } from './show';
import Content from './content'

const Papers: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Show>
        <Content />
      </Show>
    </div>
  )
}

export default Papers