import "./Home.css"

function Home(){
    return(
        <div className="home-container">
            <img className="logo" src="/images/logo.png" alt="home" />
            <div className="home-content">
                <h1 className="home-heading">Best Jewellery <br/>Collection</h1>
                <p className="home-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                <button className="shop-now">Shop Now</button>
            </div>
        </div>
    )
}

export default Home;