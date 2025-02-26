import {memo,useState } from "react"

const TextFile = () => {
    var [text, setText] = useState("");
    return (
        <div>
            <h1>THIS IS NumberFile</h1>
            <input 
                type="type" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
        </div>
    )
}

export default memo(TextFile) ;