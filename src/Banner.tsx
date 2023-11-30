import { useState, useEffect } from "react";
import './styles/Banner.css'
import { renderTypeScript, renderFlask, renderPython, renderReact } from "./utils/view";

function Banner() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div id="Banner">
      <div id="full-stack">Full Stack</div>
      <section id="Banner-sub" className="d-flex"> 
        <div id="swe">swe</div>
        <section id="Banner-devicons">
          {renderTypeScript(width, isLandscape)}{renderReact(width, isLandscape)}{renderPython(width, isLandscape)}{renderFlask(width, isLandscape)}
        </section>
      </section>
    </div>
  )
}

export default Banner;