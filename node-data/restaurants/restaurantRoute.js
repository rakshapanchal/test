
// ===================================Load Internal Modules================================================================================
const restaurantRouter = require("express").Router()
const restaurantFacade = require('./restaurantFacade')

//  ====================================Load Modules End======================================================================

// ***************************************for admin pannel*****************************************************************

/**calling facade getRestaurants function from route */
restaurantRouter.route('/getRestaurants')
    .post((req, res) => {
        restaurantFacade.getRestaurants(req, res).then((result) => {
            return res.send(result)
        })
    });

/**calling facade getRestaurants function from route */
restaurantRouter.route('/getDish')
    .post((req, res) => {
        restaurantFacade.getDish(req, res).then((result) => {
            return res.send(result)
        })
    });
// =====================================================EXPORT Module========================================================================  
// EXPORT restaurantRouter  
module.exports = restaurantRouter;