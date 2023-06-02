import React from "react"
import "./ShortenURL.css"

export default function ShortenURL() {
  return (
    <div className="shortenerURL-container">
      <div className="main-content">
        <div className="offset-container">
          <section className="inputURL">
            <form>
              <input
                className=""
                type="text"
                placeholder="Shorten a link here..."
              />
              <h5 className="error-message">Please add a link</h5>
              <a href="#" className="btn-type-a btn-square">
                shorten it!
              </a>
            </form>
          </section>
          <section className="outputURL visible">
            <div className="outputURL-response">
              <h3>https://www.frontendmentor.io</h3>
              <hr />
              <div>
                <h3>https://wefewfw/23f2</h3>
                <a href="#" className="btn-type-a btn-square btn-small">
                  copy
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
