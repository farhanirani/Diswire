import React from 'react'

function LogForm() {
    return (
        <div className="col-md-6">
              <h2 className="text-center" style={{color:'grey'}}>Welcome back!</h2>
              <h3 className="text-center" style={{color: '#c0c0c0', margin: 0, padding: 0, fontSize: '18px', marginBottom: '20px'}}>
                We're so excited to see you again!
              </h3>
              <form name="registration" action="log.php" method="post" onsubmit="return formValidation();">
                <label className="label control-label">EMAIL</label>
                <div className="input-group">
                  <span className="input-group-addon"><span className="glyphicon glyphicon-envelope" /></span>
                  <input type="email" className="form-control" required name="email" />
                </div>
                <label className="label control-label">PASSWORD</label>
                <div className="input-group">
                  <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                  <input type="password" className="form-control" required name="passid" />
                </div>
                <a href="#" className="member">Forgot password?</a>
                <input className="btn btn-info" type="submit" name="submit" defaultValue="Continue" />
                <label className="label control-label">Need an account? <a href="#" className="member">Register</a></label>
              </form>
            </div>
    )
}

export default LogForm
