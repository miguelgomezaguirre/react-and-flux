"use strict"
var React = require("react");
var createReactClass = require("create-react-class");
var ReactDom = require("react-dom");

var Home = createReactClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Home Page</h1>
                <h2>We'll adjust as we build our app</h2>
            </div>
        );
    }
})

module.exports = Home;
