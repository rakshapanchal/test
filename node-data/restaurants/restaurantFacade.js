// ========================================Load Internal Modules========================================================

const restaurantService = require('./restaurantService')

// ==========================================End Load Modules=============================================================


/**calling service  getRestaurants function from facade  */
function getRestaurants(req, res) {
    return restaurantService.getRestaurants(req, res)
        .then((result) => {
            return result;
        })
}


/**calling service getDish function from facade  */
function getDish(req, res) {
    return restaurantService.getDish(req, res)
        .then((result) => {
            return result;
        })
}
// ======================================Export Modules=================================================================

module.exports = {
    getRestaurants,/**calling service getRestaurants function  */

    getDish/**calling service getDish function from facade  */
}