import './App.css';
import { lazy, Suspense } from 'react';

const BgParticles = lazy(() => import('./BgParticles.jsx'));
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
      {/* background */}
      <BgParticles />

      {/* my contact info */}
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
