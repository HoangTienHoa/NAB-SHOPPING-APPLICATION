const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const activitiesRepository = require('../activities.repository');
const Activity = require('../activities.model');

jest.mock('mongoose', () => {
    const mongoose = jest.requireActual('mongoose');
    return new mongoose.Mongoose(); // new mongoose instance and connection for each test
});

describe('activities.repository', () => {
    let mongod;
    beforeAll(async () => {
        mongod = new MongoMemoryServer();
        const mongoDbUri = await mongod.getUri();
        await mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongod.stop();
    });

    describe("find", () => {
        test('should find and return activities data', async () => {
            const activitiesData = {
                customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
                action: "/search/white"
            }
            await Activity.create(activitiesData);

            const result = await activitiesRepository.find();
            expect(result.length).toEqual(1);
            expect(result[0].customerId).toEqual(activitiesData.customerId);
        });
    });

    describe("save", () => {
        test('should create and return activities data', async () => {
            const activityData = {
                customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
                action: "/search/white"
            }
            const spySaveModel = jest.spyOn(Activity.prototype, 'save');
            const result = await activitiesRepository.save(activityData);

            expect(result.customerId).toEqual(activityData.customerId);
            expect(spySaveModel).toHaveBeenCalledTimes(1);

        });
    });
});