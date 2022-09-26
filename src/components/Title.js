import React from 'react'

function Title() {
  return (
   <div style={{
    position:"absolute",
    width:"100%",
    textAlign:"center"
}}>

   Copyright &copy;{new Date().getFullYear()} Prateek Gupta
   </div>
  )
}

export default Title