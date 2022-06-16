// Write a function cakes(), which takes the recipe (object) and the available 
// ingredients (also an object) and returns the maximum number of cakes Pete 
// can bake (integer). For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that 
// are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    const potential = [];
    
    for (ingredient in recipe) {
        if (available[ingredient] === undefined){
            potential.push(0)
        } else potential.push((Math.trunc(available[ingredient]/recipe[ingredient])))
    }

    return Math.min(...potential)
}

// Best practices seem to use something called Object.keys

const cakes2 = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )