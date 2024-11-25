import logo from "../logo.svg"
const Demo=()=>{
  return(
<>
<div className="container">
      
      <header class="App-header">
        <div class="row">
        <img src={logo} class="App-logo" alt="logo" /></div>
        <div class='row'>
        <img src={logo} class="App-logo" alt="logo" />
        </div>
        <div class="col3">
        <img src={logo} class="App-logo" alt="logo" />
        </div>
        <img src={logo} class="App-logo" alt="logo" />
          </header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      
    </div>
</>
  )
}
export default Demo