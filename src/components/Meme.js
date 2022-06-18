import { useState, useEffect } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState({})
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: '' //http://i.imgflip.com/1bij.jpg
    })
    
    const getMemeImage = () => {
        // const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: allMemeImages[randomNumber].url
        }))
    }

    const setText = event => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemeImages(data.data.memes)
                // console.log(data.data.memes)
                // getMemeImage()
            })
    },[])

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    value={meme.topText}
                    placeholder="Top text"
                    className="form--input"
                    onChange={setText}
                    name="topText"
                />
                <input 
                    type="text"
                    value={meme.bottomText}
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={setText}
                    name="bottomText"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImg} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}