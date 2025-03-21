import logo from '../img/logo (3).png'
function Title() {
  return (
    <>
    <div className="title">
        <div className="container1">
            <div className="wrap">
                <div className="box1">
                    <a href="/" className="img"><img src={logo}/></a>    
                    <a href="/" className="h2"><h2>SoftwareM4</h2></a>
                </div>
                <div className="box">
                    <a href="/" className="p"><p>Home</p></a>
                    <a href="/" className="p"><p>About</p></a>
                    <a href="/" className="p"><p>Services</p></a>
                    <a href="/" className="p"><p>Contact</p></a>
    
                </div>
                <div className="box">
                    <a href="/" className="i"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="/" className="i"><i className="fa-brands fa-twitter"></i></a>
                    <a href="/" className="i"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="box2">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Title;