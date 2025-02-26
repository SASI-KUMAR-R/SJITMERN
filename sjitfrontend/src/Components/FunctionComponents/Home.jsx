function Home(x)
{
    var styling = {
        textAlign : "center",
        backgroundColor : "red",
        color  : "white"
    }

    var a = 100 ;
    return (
        <div>
            <h1 style={styling}>Home Page</h1>
            <h2>Below tag is for Props</h2>
            <h3>Props : {x.properties} , {x.sjit}</h3>
        </div>
    )
}
export default Home

