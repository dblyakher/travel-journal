import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

function App() {
    const cards = data.map(item => {
        return(
            <Card
                key = {item.id}
                item = {item}
            />
        )
        }
    )
    return(
        <div className="app">
            <Header />
            <section className="cards">
                {cards}
            </section>
        </div>
    )
}

export default App