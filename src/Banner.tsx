import React, { useState, useEffect } from "react";
import './styles/Banner.css'
// import './fontSize.css'

function Banner() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div className="Banner">
      <div className="full-stack">Full Stack</div>
      <div className="swe">swe</div>
    </div>
  )
}

export default Banner;