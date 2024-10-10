import './App.css';
import { lazy, Suspense } from 'react';
import BgParticles from './BgParticles.jsx';

// lazy load the type writer effect!
const Typewriter = lazy(() => import('typewriter-effect'));

// glowing cursor
document.addEventListener('mousemove', e => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

function App() {
  return (
    <>
      <BgParticles />
      <p className="small-text">
        For an Exceptional Web Experience!
      </p>
      <h1>
        <Suspense fallback={<div>Apex Web</div>}>
          <Typewriter
            options={{
              strings: ['Apex Web', 'Coming Soon!'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural'
            }}
          />
        </Suspense>
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
      <div className="cursor"></div>
    </>
  );
}

export default App;
