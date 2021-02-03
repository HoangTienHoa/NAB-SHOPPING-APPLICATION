const express = require("express");
const app = express();
const request = require("supertest");
const activitiesService = require("../activities.service");
const bodyParser = require('body-parser');
const constant = require('../activities.constant');
const routes = require('../../routes');

jest.mock('../activities.service');

describe('activities.controller', () => {
    let server;
    beforeAll(async () => {
        app.use(bodyParser.json());
        server = routes(app);
    });

    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    describe('GET /', () => {
        it('should return 200 and activities data', async () => {
            const activityData = [{
                customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
                action: "/search/white"
            }];
            activitiesService.getAllActivities.mockResolvedValueOnce(activityData);

            const response = await request(app).get("/activities");

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual(activityData);
            expect(activitiesService.getAllActivities).toHaveBeenCalledWith();
        })

        it('should return 500 when service throw exception', async () => {
            activitiesService.getAllActivities.mockRejectedValueOnce();

            const responseErr = await request(app).get("/activities").catch(err => err);

            expect(responseErr.statusCode).toEqual(500);
            expect(responseErr.text).toEqual(constant.MONGODB_ERROR);
        })
    });
});