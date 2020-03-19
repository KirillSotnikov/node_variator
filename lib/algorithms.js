function linearSearch(value, list)
{
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < list.length)
    {
      if(list[index] == value) {
        found = true;
        position = index;
      } else {
        index += 1;
      }
    }

    const result = list[position]
    return result;
}

function getIntersections (array1, array2) {
    var intersections = array1.filter(e => array2.indexOf(e) !== -1)
    return intersections
}

const getApproximate = (arr, number) => {
    let approximate = arr.filter(cur => {
        return cur > number
    })[0]
    
    if(approximate === undefined) {
        approximate = arr.filter(cur => {
            return cur < number
        })[0]
    }

    return approximate
}

module.exports = {
    getIntersections,
    linearSearch,
    getApproximate
}