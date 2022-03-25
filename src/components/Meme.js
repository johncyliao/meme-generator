import React, {useState, useEffect} from 'react'
import { FcAddImage } from  'react-icons/fc'
// import memesData from "./memesData.js"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState({})

    function generate () {
        const memesArray = allMemeImages.data.memes
        //use ({}) to return an object in implicit return
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[Math.floor(Math.random() * memesArray.length)].url
        }))
    }

    function handleChange(effect) {
        const {name, type, value} = effect.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    */


    //fetch data from API instead of the local database
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeImages(data))
    }, [])
    
    return (
        <main>
            <div action="" className='form'>
                <input 
                    type="text" 
                    id=""
                    // placeholder='Top text'
                    className='form-input'
                    onChange={handleChange}
                    name="topText" 
                    value={meme.topText}
                    disabled
                />
                <input 
                    type="text" 
                    id="" 
                    // placeholder='bottom text'
                    className='form-input'
                    onChange={handleChange}
                    name="bottomText" 
                    value={meme.bottomText}
                    disabled
                />
                <button 
                // by default, button in a form is consider a 'submit' type
                    onClick={generate}
                    className='form-button'>
                    Generate!  <FcAddImage className='btn-image' 
                />
                </button>
            </div>
            
            
            <div className='meme'>
                <h2 className='meme-text meme-text-top'>{meme.topText}</h2>
                <img className='meme-img' src={meme.randomImage} alt="" />
                <h2 className='meme-text meme-text-bottom'>{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme