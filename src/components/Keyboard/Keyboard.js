import React, { useState } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';

function Keyboard() {

  const [keys, setKeys] = useState('')

  return (
    <>
      <KeyboardEventHandler
        handleKeys={['a', 'b', 'c']}
        onKeyEvent={
          (key, e) => setKeys(key)
        } 
      />
        Keyboard event: <b>{keys}</b>
    </>
  )
}

export default Keyboard
