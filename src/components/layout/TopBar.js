import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import "./TopBar.css";

const TopBar = props => {
  const { history, user } = props;
  console.log("user", user);

  return (
    <AppBar
      className="AppBar"
      position="fixed"
      style={{ zIndex: 10, margin: 0 }}
    >
      <Toolbar className="Toolbar">

        <Typography color="inherit" onClick={() => history.push("/login")}>
          {!user && <button className="Button">Login</button>}
        </Typography>
       
        <Typography color="inherit" onClick={() => history.push("/events")}>
          <button className="Button">Home</button>
        </Typography>
        <Typography
          className="Typography"
          variant="title"
          color="inherit"
          style={{ flex: 2  }}
        >
          <div className="h1"> Ticketswap </div>
        </Typography>
        <Typography color="inherit" onClick={() => history.push("/signup")}>
          {!user && <button className="Button">Sign up</button>}
        </Typography>
       
        <Typography color="inherit" onClick={() => history.push("/logout")}>
          {user && <button className="Button">Logout</button>}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user: state.currentUser
  // &&
  // state.users
  //  &&
  // state.users[userId(state.currentUser.jwt)]
});

export default withRouter(connect(mapStateToProps)(TopBar));
