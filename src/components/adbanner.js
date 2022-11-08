
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { useState, useEffect } from "react";


export default function Adbanner() {
  const { adbanner } = useFlags()
  const [ academyText, setAcademyText ] = useState("Have you explored")

  const client = useLDClient()

  useEffect(() => {
    setText()
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }, [adbanner, academyText])

  function setText() {
    setAcademyText(adbanner)
    console.log(academyText)
    return academyText
  }

  function handleClick() {
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }

  return (
    <div
      className={`p-2 text-white items-center leading-none lg:rounded-full flex lg:inline-flex`}
      role="alert"
    >
      <span className="font-sohne mr-2 ml-2 text-left flex-auto">
        {academyText}
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
