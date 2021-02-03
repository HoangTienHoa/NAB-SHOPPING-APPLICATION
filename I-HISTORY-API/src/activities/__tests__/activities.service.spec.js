const activitiesService = require('../activities.service');
const activitiesRepository = require('../activities.repository');

jest.mock('../activities.repository');

describe('activities.service', () => {
    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    describe('getAllActivities', () => {
        it('should get and return activities data', async () => {
            const activityData = [{
                customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
                action: "/search/white"
            }];
            activitiesRepository.find.mockResolvedValueOnce(activityData);

            const result = await activitiesService.getAllActivities();

            expect(result).toEqual(activityData);
            expect(activitiesRepository.find).toHaveBeenCalledWith();
        })

        it('should throw exception', async () => {
            const error = "get error";
            activitiesRepository.find.mockRejectedValueOnce(error);

            const result = await activitiesService.getAllActivities().catch(err => err);

            expect(result).toEqual(error);
        })
    });

    describe('saveActivity', () => {
        it('should save an activities and return data', async () => {
            const activityData = {
                customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
                action: "/search/white"
            };
            activitiesRepository.save.mockResolvedValueOnce(activityData);
            const result = await activitiesService.saveActivity("Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz", "/search/white");
            expect(result).toEqual(activityData);
            expect(activitiesRepository.save).toHaveBeenCalledWith(activityData);
        })

        // it('should throw exception', async () => {
        //     const error = "save error";
        //     activitiesRepository.save.mockRejectedValueOnce(error);
        //     const result = await activitiesRepository.saveActivity("", "")
        //         .catch(err => err);
        //     expect(result).toEqual(error);
        // })
    });

    // describe('consumerSaveActivitiesEvent', () => {
    //     it('should save an activities and return data', async () => {
    //         const activityData = {
    //             customerId: "Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz",
    //             action: "/search/white"
    //         };
    //         activitiesRepository.save.mockResolvedValueOnce(activityData);
    //         const result = await activitiesService.saveActivity("Rhj8AmuGzwHlJQu0ofb3mTc2jghlTaNz", "/search/white");
    //         expect(result).toEqual(activityData);
    //         expect(activitiesRepository.save).toHaveBeenCalledWith(activityData);
    //     })
    // });
});