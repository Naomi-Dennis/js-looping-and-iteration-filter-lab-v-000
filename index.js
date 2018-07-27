// Code your solution in this file
function findMatching(list, value){
    return list.filter( (ele) => {return ele.toUpperCase() === value.toUpperCase()}  )
}
