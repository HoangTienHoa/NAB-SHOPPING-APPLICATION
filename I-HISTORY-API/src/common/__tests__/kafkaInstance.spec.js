const kafkaInstance = require('../kafka/kafkaInstance');

describe("getKafkaInstance", () => {
    test('should get an instance', async () => {
        expect(kafkaInstance()).not.toBeNull();
    });
});
