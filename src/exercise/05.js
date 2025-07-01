// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


function Box(className='', style, words){
  return(
    <div className={`${className} box`} style={{fontStyle: 'italic', ...style}}>
      {words}
    </div>
  )
}
function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: "lightblue"}} words="small lightblue box"/>
      <Box className="box--medium" style={{backgroundColor: "pink"}} words="medium pink box"/>
      <Box className="box--large" style={{backgroundColor: "orange"}} words="large orange box"/>
    </div>
  )
}

export default App
