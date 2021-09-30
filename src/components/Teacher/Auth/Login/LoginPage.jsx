import React, { useState, useEffect } from "react";
import { useDispatch, useSelector , connect } from "react-redux";
import { userLogin } from "../../../../actions/authActions";
import Layout from "../../../../Layout";
import "./styles.scss";
 import "bootstrap/scss/bootstrap.scss";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const authStateUser = props.authState.isAuthenticated;
  const userRole = props.authState.userRole;
  
 

  console.log("login", authStateUser, userRole);

  useEffect(() => {
    if (localStorage.getItem("jwtToken"))
      props.history.push("/");
  }, []);
 if (authStateUser) {
   return <Layout type={userRole} />;
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user, props.history));
  };

  return (
    <React.Fragment>
      <div className="admin-login">
        <div className="container px-0">
          <div className="row mx-0">
            <div className="col-md-5 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5>User Login</h5>
                  <form onSubmit={handleSubmit}>
                  <div className="form-group mb-0 mt-4">
                  <input
                    type="email"
                    name={email}
                    className="form-control shadow-none"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  </div>

                  <div className="form-group mb-0 mt-4">
                  <input
                    type="password"
                    name={password}
                    className="form-control shadow-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  </div>
                

                    <div className="form-group mb-0 mt-4">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-dark btn-block login-btn shadow-none"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { auth } = state
  return { authState: auth }
}

export default connect(mapStateToProps)(LoginPage)

