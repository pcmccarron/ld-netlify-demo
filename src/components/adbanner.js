
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { useState, useEffect } from "react";


export default function Adbanner() {
  const { adbanner } = useFlags()
  const {maincss, setMainCSS} = useState()

  const client = useLDClient()

  useEffect(() => {
    setCSS()
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }, [adbanner])

  function setCSS() {
    setMainCSS(adbanner)
    console.log(maincss)
    return maincss
  }

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
        Have you explored
        <a class="cta"
          href="https://academy.launchdarkly.com"
          target="_blank"
          className={`text-ldyellow`}
          onClick={handleClick.bind()}
        >&nbsp;LaunchDarkly Academy</a>?
      </span>
    </div>
  );
}
