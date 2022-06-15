import { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg'
    })
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: memesArray[randomNumber].url
        }))
    }

    const setTopText = event => {
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: event.target.value
        }))
    }

    const setBottomText = event => {
        setMeme(prevMeme => ({
            ...prevMeme,
            bottomText: event.target.value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={setTopText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={setBottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <img className="meme--img" src={meme.randomImg} />
            <div className="meme--top-text">{meme.topText}</div>
            <div className="meme--bottom-text">{meme.bottomText}</div>
        </main>
    )
}