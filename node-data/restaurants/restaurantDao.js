
// ========================================Load Internal Modules========================================================

let BaseDao = require('../dao/baseDao');
const restaurantModel = require('./restaurantModel')
const restaurantDao = new BaseDao(restaurantModel);

// ==========================================End Load Modules=============================================================
function getRestaurants(data) {
    let query = { availableMeals: { $in: [data] } };
    return restaurantDao.find(query).then((result) => {
        return result;
    })
}

function getDish(data) {
    let query = { restaurant: data };
    return restaurantDao.find(query).then((result) => {
        return result;
    })
}

    // ======================================Export Modules=================================================================

module.exports = {
    getRestaurants,
    getDish
}