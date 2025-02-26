import { useState } from "react"

const NumberFile = () => {
    var [text, setText] = useState(0);
    return (
        <div>
            <h1>THIS IS NumberFile</h1>
            <input 
                type="number" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
        </div>
    )
}

export default NumberFile