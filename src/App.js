import React, {useState} from "react";
import Counter from "./components/Counter";
import "./styles/App.css"

function App() {
    const [value, setValue] = useState("Текст в инпуте")


    return(
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1.Javascript</strong>
                    <div>
                        Javascript - Язык программирования!
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    )

}

export default App;
