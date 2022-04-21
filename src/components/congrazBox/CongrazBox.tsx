import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { confirm } from "react-confirm-box";

function CongrazBox() {
    const [greetingStatus, displayGreeting] = useState(true);

    const contentProps = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginTop: greetingStatus ? 0 : -500
    });


return (
    <div>
    {!greetingStatus ? (
    <div></div>
    ) : (
    <div id='over'>
        <animated.div className="box" style={contentProps}>
            <h1>Ertu tilbúin að ljúka plokk svæði?</h1>
            <button className="button">
                Hætta við
             </button>
             <button className="button">
                Staðfesta
             </button>
        </animated.div>
    </div>

    )}
    <div className="button-container">
        <button onClick={() => displayGreeting(a => !a)} className="button">
          Click Here
        </button>
      </div>
    </div>
    )
}

export default CongrazBox