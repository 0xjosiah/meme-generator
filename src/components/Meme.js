import { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    // const [memeImg, setMemeImg] = useState('http://i.imgflip.com/1bij.jpg')
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

    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    // onKeyUp={}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
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