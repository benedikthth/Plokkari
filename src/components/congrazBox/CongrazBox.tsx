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
            <button className="button1">
                Hætta við
             </button>
             <button className="button2">
                Staðfesta
             </button>
        </animated.div>
    </div>
    )}
    </div>
    )
}

export default CongrazBox