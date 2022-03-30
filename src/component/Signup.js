function Signup() {
  return (
    <div class=".container">
      <div style={{ marginTop: "20vh", marginLeft: "25vw" }}>
        <div>
          <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg" />
        </div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="name1" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="staticEmail" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
          <div>
            <button type="button" class="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
