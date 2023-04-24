import Lottie from "lottie-web";
import { useEffect, useState, useRef } from "react";

import * as location from '../../../public/97078-ballooncelebration.json'

function CongrazBox({data, eraseData}) {


    const container = useRef(null);

    const encouragements = ([
        "Takk fyrir að halda Íslandi hreinu!", 
        "Vel gert!", 
        "Vel plokkað!", 
        "Takk fyrir að leggja þitt af mörkum!", 
        "Þú ert stjarna!", 
        "Nú er náttúran aðeins hreinni!", 
        "Áfram með plokkið!", 
        "Takk fyrir hjálpina!", 
        "Takk fyrir að vera æði!", 
        "Þú ert kraftaverk!"])

    const encouragement = encouragements[Math.floor(Math.random()*encouragements.length)];

    const text = "Ertu tilbúin að ljúka plokk svæði?"
    
    const [submitted, setSubmitted] = useState(false)

    const submit = () => { 
          setSubmitted(true)
          Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: location
          });
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/Trash/Trash`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({
            hexIds: data
            })
         })


        setTimeout(() => {
            Lottie.destroy();
            eraseData();

          }, 3000);
      }

      const cancel = () => {   
            eraseData();
      }

return (
    <div id='over'>
        <div className="box">
            <h1>{submitted ? encouragement : text}</h1>
            <button className="button1" onClick={cancel} disabled={submitted}>
                Hætta við
             </button>
             <button className="button2" onClick={submit} disabled={submitted}>
                Staðfesta
             </button>
        </div>
        <div ref={container} className="lottie-player2"/>
    </div>
    )
}

export default CongrazBox