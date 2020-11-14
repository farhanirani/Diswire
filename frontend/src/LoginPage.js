import React from 'react'
import './style.css'
import LogForm from './Components/LogForm'
import RegForm from './Components/RegForm'

function LoginPage() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <nav className="navbar navbar-expand-md">
          <div className="navbar-collapse collapse w-80 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <div className="navbar-header">
                <a className="navbar-brand" href="/channels/69"><span className="glyphicon glyphicon-king" /> DISWIRE</a>
              </div>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
                    {/* <LogForm /> */}
                    <RegForm />
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    );
}

export default LoginPage
