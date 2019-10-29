"use strict"

var React = require("require");
var createReactClass = require("create-react-class");
var RecipeApi = require("../../../api/recipeApi");

var Recipes = createReactClass({
    render: function() {


        var createRecipeRow = function(recipe) {
            return (
                <tr key={recipe.id}>
                    <td><a href={"/#recipe/"+ recipe.id} />{recipe.id}</td>
                    <td><a href={"/#recipe/"+ recipe.id} />{recipe.recipeName}</td>
                </tr>
            )
        }

        return(
            <div>
                <h1>Our recipes</h1>
                    <table className="table table-hover">  
                        <thead>
                            <th>ID</th>
                            <th>Recipe Name</th>
                        </thead>
                        <tbody>
                            {this.state.recipes.map(createRecipeRow, this)}
                        </tbody>
                    </table>
            </div>
        )
    }
})

module.exports = Recipes;