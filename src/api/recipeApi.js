"use strict"

var recipes = require("./recipeData").recipes;
var _ = require("lodash");

var _generateId = function(recipe) {
    return recipe.category.toLoweCase() + '-' + recipe.recipeName;
}

var _cloneMe = function(item){
    return JSON.parse(JSON.stringify(item));
}

var RecipeApi = {
    getAllRecipes: function() {
        return _cloneMe(recipes)
    },

    getRecipeById: function(id) {
        var recipe = _.find(recipes, {id: id})
        return _cloneMe(recipe)
    },

    saveRecipe: function(recipe) {

        if(recipe.id) {
            var existingRecipeIndex = _.indexOf(recipes, _.find(recipe, {id:id}));
            recipes.splice(existingRecipeIndex, 1, recipe);
        } else {
            recipe.id = _generateId(recipe);
            recipes.push(_cloneMe(recipe));
        }

        return recipe;
    },

    deleteRecipe: function(id) {
        _.remove(recipes, {id: id});
    }
}

module.exports = RecipeApi;