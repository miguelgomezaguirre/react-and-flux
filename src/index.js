$ = jQuery = require("jquery");
var React = require("react");
var ReactDom = require("react-dom");
var createReactClass = require("create-react-class");
var Home = require("./js/components/home/HomePage.jsx");
var About = require("./js/components/about/About.jsx");
var Header = require("./js/components/header/header.jsx");
var Recipes = require("./js/components/recipe/RecipePage.jsx");

var App = createReactClass({
    render: function() {
        var Child;

        switch(this.props.route) {
            case "about": 
                Child = About;
                break;
            case "recipe": 
                Child = Recipes;
                break;
            default:
                Child = Home;
        }

        return(
            <div>
                <Header />
                <Child />
            </div>
        )
    }
})


function _routeMe() {
    var route = window.location.hash.substring(1);
    ReactDom.render(<App route={route} />, document.getElementById("app"));
}

window.addEventListener("hashchange", _routeMe);
_routeMe();