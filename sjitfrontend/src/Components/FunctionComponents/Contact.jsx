import {useState} from "react" ;

function Contact() {

    var string = "" ;
    var [inital,final] = useState(string) ; 
    function add(string)
    {
        final += inital
    }

    return(
        <div>
            <h1>Contact Page</h1>
            <input type="text" placeholder="ENTER" />
            
        </div>
    )
}

export default Contact