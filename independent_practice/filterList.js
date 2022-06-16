// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

function filterList(list) {
    const filtered = [];
    
    list.map((item) => {
        if (typeof(item) === "number") {
            filtered.push(item)
        }
    })

    return filtered
}

// Filter is the array method I'm needing to return one line

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }