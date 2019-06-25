// ========================================Load Internal Modules========================================================

const restaurantService = require('./restaurantService')

// ==========================================End Load Modules=============================================================


/**calling service addCategory function from facade  */
function getRestaurants(req, res) {
    return restaurantService.getRestaurants(req, res)
        .then((result) => {
            console.log(result)
            return result;
        })
}


/**calling service addCategory function from facade  */
function getDish(req, res) {
    return restaurantService.getDish(req, res)
        .then((result) => {
            console.log(result)
            return result;
        })
}
// ======================================Export Modules=================================================================

module.exports = {
    getRestaurants,/**calling service getRestaurants function  */

    getDish
}