
import React from 'react';
import Router from 'react-router';

//import AuthStore from 'stores/AuthStore';

var LoginRequired = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      if(this.state.userData.role === undefined){
        // go over to login page
        transition.redirect('/login', null, { redirect: transition.path });
      }
      //callback();
    }
  },
  render () {
    console.log("AUTH ------------->");
    return (
      <Router.RouteHandler/>
    );
  }
});

module.exports = { LoginRequired };