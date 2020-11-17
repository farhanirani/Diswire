import React from 'react'
import './home.css'

function StartPage() {
     return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Google Font */}
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        {/* Custom CSS */}
        <link rel="stylesheet" href="home.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>HomePage</title>
        <style dangerouslySetInnerHTML={{__html: "\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        li{\n            padding-left: 18px;\n        }\n    \n        li a:hover:not(#special) {\n            text-decoration: underline;\n        } \n    \n        #loginbtn {\n            background-color: white;\n            color: black;\n            margin: 10px 20px;\n            padding: 5px 10px;\n            border-radius: 20px;\n        }\n    \n        #loginbtn:hover {\n            background-color: #529fe2;\n            color: white;\n        }\n    \n        header {\n            background-image: linear-gradient(#1e47fc, #a4b5ff);\n            padding-top: 100px;\n            position: relative;\n            color: white;\n            min-height: 500px;\n        }\n    \n        #img1 {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            max-width: 40vw;\n            min-width: 300px;\n        }\n    \n        #img2 {\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            max-width: 40vw;\n            min-width: 300px;\n        }\n    \n        #maintitle {\n            text-align: center;\n            position: relative;\n            margin: auto;\n            padding: 30px;\n        }\n        " }} />
        <nav className="navbar navbar-expand-md navbar-dark" style={{paddingLeft: '10%', overflow: 'hidden', fontWeight: 'bold', backgroundColor: '#1e47fc', paddingTop: '20px'}}>
          <a className="navbar-brand" href="/channels/69">
            <i className="fab fa-discord" style={{fontSize: '32px'}} id="b1" /><p id="b1">DISWIRE</p></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/channels/69">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/channels/69">Why Diswire?</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/channels/69" id="home">About</a>
              </li>
            </ul>
            <button className="btn" id="b2">Login</button>
          </div>
        </nav>
        <header>
          <img id="img2" alt="test" src="https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg" />
          <img id="img1" alt="hello" src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg" />
          <div id="maintitle">
            <h1>
              <i className="fab fa-discord" style={{marginRight: '10px'}} />DISWIRE
            </h1>
            <br />
            <h3>
              A simple all-in-one place for messaging, groups, and conference
              calling
            </h3>
          </div>
        </header>
        <div id="overlay">
          <div className="cv-spinner">
            <span className="spinner" />
          </div>
        </div>
        <section className="container-fluid px-0" style={{maxWidth: '97%'}}>
          <div className="row align-items-center content" id="myDiv">
            <div className="col-md-6 order-2 order-md-1">
              <img src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 text-center order-1 order-md-2">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2 style={{fontWeight: 700}}>An invite-only place with plenty of room to talk</h2>
                  <p className="lead" id="p1" style={{display: 'none'}}>
                    Diswire servers are organized into topic-based channels where
                    you can collaborate, share, and just talk about your day without
                    clogging up a group chat.
                  </p>
                  <button className="btn" id="bt1" style={{marginLeft: '30%', marginRight: '35%'}}>Show More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center content">
            <div className="col-md-6 text-center">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2 style={{fontWeight: 700}}>Where hanging out is easy</h2>
                  <p className="lead" id="p2" style={{display: 'none'}}>
                    Grab a seat in a voice channel when you’re free. Friends in your
                    server can see you’re around and instantly pop in to talk
                    without having to call.
                  </p>
                  <button className="btn" id="bt2" style={{marginLeft: '30%', marginRight: '35%'}}>Show More</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://discord.com/assets/98c9edf635a98377ec579aaa19ed47be.svg" alt="" className="img-fluid" />            
            </div>
          </div>
          <div className="row align-items-center content">
            <div className="col-md-6 order-2 order-md-1">
              <img src="https://discord.com/assets/9184fcadc2e3c84650dd4b075850d3d6.svg" alt="" className="img-fluid" />          </div>
            <div className="col-md-6 text-center order-1 order-md-2">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                  <h2 style={{fontWeight: 700}}>From a few to a fandom</h2>
                  <p className="lead" id="p3" style={{display: 'none'}}>
                    Get a community of any size running with moderation tools and
                    custom member access. Give members special powers, set up
                    private channels, and more.
                  </p>
                  <button className="btn" id="bt3" style={{marginLeft: '30%', marginRight: '35%'}}>Show More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid px-0" id="footer">
          <h3 style={{paddingLeft: '5%', color: '#529fe2', fontWeight: 'bold'}}>Your Place to Talk</h3>
          <div style={{paddingLeft: '5%'}}>
            <a href="/channels/69" style={{color: 'white'}}><i className="fa fa-twitter" style={{fontSize: '24px', paddingRight: '20px'}} /></a>
            <a href="/channels/69" style={{color: 'white'}}><i className="fa fa-instagram" style={{fontSize: '24px', paddingRight: '20px'}} /></a>
            <a href="/channels/69" style={{color: 'white'}}><i className="fa fa-facebook-official" style={{fontSize: '24px', paddingRight: '20px'}} /></a>
            <a href="/channels/69" style={{color: 'white'}}><i className="fa fa-youtube-play" style={{fontSize: '24px', paddingRight: '20px'}} /></a>
          </div>
          <div style={{margin: '20px 5%', height: '2px', backgroundColor: '#529fe2'}} />
          <div style={{paddingLeft: '5%'}}><a className="navbar-brand" href="/channels/69">
              <i className="fab fa-discord" style={{fontSize: '32px'}} id="b1" />
              <p id="b1">DISWIRE</p>
            </a>
            <button className="btn" id="b2" style={{float: 'right'}}>Sign up</button>
          </div>
        </section>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    );
}

export default StartPage
