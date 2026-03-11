import { useEffect, useState } from "react";
import "../assets/css/Intro.css";

function Intro({ onFinish }) {
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanSkip(true);
    }, 4000); 

    const autoEnd = setTimeout(() => {
      onFinish();
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoEnd);
    };
  }, []);

  return (
    <div className="intro">
      <iframe
        src="https://my.spline.design/gamecubelogointroanimationremake-FSpBFzcFpWuUFg6jErFlBovt/" //Gamecube
        //src="https://my.spline.design/soundwave-XDucJuf6Bd9uGeCBQ8AZurVF/" //waves
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>

      {canSkip && (
        <button className="skip-button" onClick={onFinish}>
          Pular
        </button>
      )}
    </div>
  );
}

export default Intro;