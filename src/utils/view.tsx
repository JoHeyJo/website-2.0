import '../styles/Banner.css'

function renderTypeScript(windowWidth:number) {
  return windowWidth > 915
    ? <span><span className="tech">TypeScript</span>< span className = "pipes" >| </span></span >
    : <span><i className="devicon-typescript-plain" > </i><span className="pipes">|</span > </span>
}
function renderReact(windowWidth:number) {
  return windowWidth > 935
    ? <span><span className="tech">React</span> < span className = "pipes" >| </span></span >
  : <span><i className="devicon-react-original" > </i><span className="pipes">|</span > </span>
}

function renderPython(windowWidth:number) {
  return windowWidth > 955
    ? <span><span className="tech">Python</span> < span className = "pipes" >| </span></span >
  : <span><i className="devicon-python-plain" > </i><span className="pipes">|</span > </span>
}

function renderFlask(windowWidth:number) {
  return windowWidth > 985
    ? <span className="tech"> Flask </span>
    : <i className="devicon-flask-original" > </i>
}

export { renderTypeScript, renderReact, renderPython, renderFlask}