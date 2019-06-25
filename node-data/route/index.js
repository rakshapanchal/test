
//Load restaurant routes
const restaurantRouter = require('../restaurants/restaurantRoute')


//========================== Load Modules End ==============================================

//========================== Export Module Start ====== ========================

module.exports = function (app) {

    // Attach restaurants Routes
    app.use('/restaurants', restaurantRouter);

};