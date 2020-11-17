import React from 'react'

function RegForm() {
    return (
        <div class="col-md-6">
          <h2 class="text-center" style={{color:'grey'}}>Create an account</h2>
          <form
            name="registration"
            action="reg.php"
            method="post"
            onsubmit="return formValidation();"
          >
            <label class="label control-label">USERNAME</label>
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-user"></span>
              </span>
              <input type="text" class="form-control" name="uname" id="tooltip-1" title="Enter You name" required />
            </div>
            <label class="label control-label">EMAIL</label>
            <div class="input-group">
              <span class="input-group-addon"
                ><span class="glyphicon glyphicon-envelope"></span
              ></span>
              <input type="email" class="form-control" required name="email" id="tooltip-2" title="Enter You E-mail"/>
            </div>
            <label class="label control-label">PASSWORD</label>
            <div class="input-group">
              <span class="input-group-addon"
                ><span class="glyphicon glyphicon-lock"></span
              ></span>
              <input
                type="password"
                class="form-control"
                required
                name="passid"
                id="tooltip-3" title="Enter a Suitable Password"
              />
            </div>
            <label class="label control-label">DATE OF BIRTH</label>
            <div class="input-group">
              <span class="input-group-addon"
                ><span class="glyphicon glyphicon-calendar"></span
              ></span>
              <input
                type="date"
                id="birthday"
                class="form-control"
                name="dob"
                onfocus="myFunction(this)"
                id="tooltip-4" title="Enter You Birthday"
                required
              />
            </div>
            <div class="row">
              <div class="col-md-8">
                <input type="checkbox" required name="terms" /><small>
                  I agree with all the terms</small
                >
              </div>
            </div>
            <input
              class="btn btn-info"
              type="submit"
              name="submit"
              value="Continue"
            />
            <a href="/channels/69" class="member">Already have an account?</a>
          </form>
        </div>
    )
}

export default RegForm
