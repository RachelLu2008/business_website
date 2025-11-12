// import { useState } from 'react'
// import reactLogo from './react.svg'
// import viteLogo from '/vite.svg'
import logo from '/StellarHorizon.png'
import './App.css'

function App() {

  return (
    <>

      <div  id = "logo" >
          <img src={logo} height={250} width={250}></img>
      </div>
        <div id={"Quote"}>
            <h1>“At StellarHorizon, we aim to bring the wonders of the universe within everyone's reach—inspiring
                curiosity, innovation, and discovery for the next generation of learners and explorers."</h1>
            <p>-Jeffrey Arellano</p>
        </div>

        <div>
        <h1>Our Mission</h1>
            <p id = "missionStatement">StellarHorizon explores new ways to connect people with the universe through technology, education, and
                research. Our mission is to make astronomy and space discovery accessible to everyone while inspiring the next generation of explorers and scientists.</p>
        </div>
        <div>
            <h1>The Problem</h1>
            <p>Many people are fascinated by space but feel disconnected because astronomy tools are expensive and too technical. This leaves a gap between curiosity and real discovery.</p>
            <p>
                Without accessible tools, students and space enthusiasts miss out on learning and inspiration that could lead to future scientific careers.</p>
        </div>
        <div>
            <h1>Objectives</h1>
            <div id="objectiveList">
                <div className="objlist">
                    <h3>Putting our product(s) out there</h3>
                    <p>Launch and sell 1,000 telescopes within the first year of operation.</p>
                </div>
                <div className="objlist">
                    <h3>Grow our virtual product(s)</h3>
                    <p>Further modernize and improve the StellarHorizon App to reach 10,000 active users within the
                        first 12 months of release.</p>
                </div>
                <div className="objlist">
                    <h3>Partnering with institutions</h3>
                    <p>Create connections and establish partnerships with prestigious universities, and research labs to conduct scientific research with the help of our products.</p>
                </div>
                <div className="objlist">
                    <h3>Maintaining a high satisfaction level</h3>
                    <p>Achieve a 90% customer satisfaction rate through quality products, fast support, and engaging educational content.</p>
                </div>
            </div>
        </div>
        <div>
            <h1>Founder and CEO</h1>
            <h2>Jeffrey Arellano</h2>
            <p>The Founder and CEO is Jeffrey Arellano. He is a passionate astronomer with a heavy background in
                Astrophysics and Business Administration.</p>
            <p id = "finalDescription">Arellano constructed this company to make outer space more accessible and interactive with the innovative and curious public.</p>

        </div>
    </>
  )
}

export default App
