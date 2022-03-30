function Login() {
  return (
    <div class=".container">
      <div style={{ marginTop: "20vh", marginLeft: "25vw" }}>
        <div>
          <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg" />
        </div>
        <div>
          <h1>Login</h1>
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
              Login
            </button>
          </div>
          <div>
            or <span style={{ color: "blue" }}>SignUp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
