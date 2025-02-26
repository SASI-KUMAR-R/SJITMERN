const tackingMyButtonComp = (Component) => {
    return(props) =>{
        const handleClick = () => {
            alert("the tracking info on clicking this button",)
        }
        return(
            <form onClick={handleClick}>
                Email: <input type="text" />
                <br />
                Password: <input type="text" />
                <br />
                <Component {...props}/>
            </form>
        )
    }
}

export default tackingMyButtonComp