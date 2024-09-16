import './App.css'
import Typewriter from 'typewriter-effect';

function App() {

  return (
    <>
      <p className="small-text">
        For an Exceptional Web Experience!
      </p>
      <h1>
        <Typewriter
          options={{
            strings: ['Apex Web', 'Coming Soon!'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="small-text">
        Contact us at <br></br>
        <a href="mailto:info@apexweb.lk">
          <code>info@apexweb.lk</code>
        </a>
        &nbsp;/&nbsp;
        <a href="tel:+94777662700">
          <code>+94777662700</code>
        </a>
      </p>
    </>
  )
}

export default App
