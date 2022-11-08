
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { useState, useEffect } from "react";


export default function Adbanner() {
  const { adbanner } = useFlags()
  const {maincss, setMainCSS } = useState('text-ld-white')
  
  const client = useLDClient()

  useEffect(() => {
    console.log("Configure...")
    if (adbanner === 'v1') {
      setMainCSS('bg-ldred text-white')
    } else if (adbanner === 'v2'){
      setMainCSS('bg-ldblue text-white')
    } else {
      setMainCSS('text-ldwhite')
    }
    console.log(maincss)
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }, [adbanner])

  function handleClick() {
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }

  return (
    <div
      className={`p-2 ${maincss} items-center leading-none lg:rounded-full flex lg:inline-flex`}
      role="alert"
    >
      <span className="font-sohne mr-2 ml-2 text-left flex-auto">
        Have you explored our new
        <a class="cta"
          href="https://academy.launchdarkly.com"
          target="_blank"
          className={`text-ldyellow`}
          onClick={handleClick.bind()}
        >
           LaunchDarkly Academy
        </a>?
      </span>
    </div>
  );
}
