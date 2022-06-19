import { useState, useEffect } from "react"

export default function Meme() {
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: ''
    })
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: allMemes[randomNumber].url
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
        const fetchMemes = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        fetchMemes()
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