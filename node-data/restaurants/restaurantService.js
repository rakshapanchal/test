
// ========================================Load Internal Modules========================================================

const restaurantDao = require('./restaurantDao')
const restaurantMapper = require('./restaurantMapper')
const restaurantMsg = require('./restaurantConstants').messages

// ==========================================End Load Modules=============================================================

/**for get restaurant list*/
function getRestaurants(req, res) {
    return restaurantDao.getRestaurants(req.body.availableMeals).then((result) => {
        return restaurantMapper.response_Mapping(restaurantMsg.ok, result);
    }).catch((err) => {
        return restaurantMapper.internalError();
    })
}

/**for get dish List */
function getDish(req, res) {
    return restaurantDao.getDish(req.body.restaurant).then((result) => {
        return restaurantMapper.response_Mapping(restaurantMsg.ok, result);
    }).catch((err) => {
        return restaurantMapper.internalError();
    })
}



// ======================================Export Modules=================================================================
module.exports = {
    getRestaurants,/**for get restaurant list*/

    getDish/**for get dish List */
}