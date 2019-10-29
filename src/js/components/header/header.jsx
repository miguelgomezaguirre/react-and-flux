"use strict"

var React = require("react");
var createReactClass = require("create-react-class");

var Header = createReactClass({
    render: function() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img alt="Brand" src="./images/myLogo.png" />
                    </a>

                    <ul className="nav nav-tabs" >
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
})

module.exports = Header;