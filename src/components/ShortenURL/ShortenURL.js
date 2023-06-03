import React, { useEffect } from "react"
import "./ShortenURL.css"
import { useState } from "react"

export default function ShortenURL() {
  const [input, setInput] = useState("")
  const [links, setLinks] = useState([])
  const [visible, setVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  let url = "https://api.shrtco.de/v2/shorten?url=" + input
console.log(input.substring(0, 3))
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const checkInput = ()=>{
    if(input.substring(0,3) !== "www"){
      setErrorMessage(true)
    }
  }

  const fetchLink = async () => {
      try {
          const res = await fetch(url)
          if (!res.ok) {
            throw new Error("something went wrong")
          }
          const data = await res.json()
          setLinks(data.result)
          setVisible(true)
      } catch (error) {
        console.log(error)
      }
  }

  const resetInput = (e) => {
    e.preventDefault()
    if(input){
      fetchLink()
      setErrorMessage(false)
      checkInput()
    }
    setInput("")
    if(!input){
      setErrorMessage(true)
    }
  }

  return (
    <div className="shortenerURL-container">
      <div className="main-content">
        <div className="offset-container">
          <section className="inputURL">
            <form>
              <input
                value={input}
                onChange={handleInput}
                className=""
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && <h5 className="error-message">Please add a link</h5>}
              <a
                onClick={resetInput}
                href="#"
                className="btn-type-a btn-square"
              >
                shorten it!
              </a>
            </form>
          </section>
          {visible &&
            <section className="outputURL ">
              <div className="outputURL-response">
                <h3>{links.original_link}</h3>
                <hr />
                <div>
                  <h3>{links.short_link}</h3>
                  <a href="#" className="btn-type-a btn-square btn-small">
                    copy
                  </a>
                </div>
              </div>
            </section>
          }
        </div>
      </div>
    </div>
  )
}
