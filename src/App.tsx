import { useEffect, useRef } from "react";

import { gsap } from 'gsap';

const App = () => {

  let header1 = useRef(null);
  let header2 = useRef(null);
  let header3 = useRef(null);
  let tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(header1.current, { duration: 0.5, marginTop: 0, opacity: 1 })
      .to(header2.current, { delay: 0.5, duration: 1, opacity: 1, visibility: 'visible' })
      .to(header1.current, { duration: 1, marginTop: -30 }, "<")
      .to(header3.current, { delay: 0.5, duration: 1, opacity: 1, visibility: 'visible' })
      .to(header1.current, { duration: 1, marginTop: -60 }, "<");
  }, [])

  return (
    <div tw="text-center flex flex-col justify-center h-full">
     <h1 ref={header1} tw="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-100 mb-5 mt-60 opacity-0">Hello there!</h1>
     <h2 ref={header2} tw="text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-300 invisible opacity-0">We're still working on this at the moment.</h2>
     <h2 ref={header3} tw="text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-300 invisible opacity-0">Check back <span tw="hover:text-yellow-100">soon</span> for <a href="https://github.com/KiriKaz" tw="text-blue-400 font-semibold">qkjrmid</a>'s portfolio!</h2>
    </div>
  );
}

export default App;