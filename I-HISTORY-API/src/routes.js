const activitiesRoute = require('./activities/activities.controller');

//Import Routes
const routes = (app) => {
    app.use('/activities', activitiesRoute);
};

module.exports = routes;