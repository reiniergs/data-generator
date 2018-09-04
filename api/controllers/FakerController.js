const { generateRecordFromMetadata } = require('./../services/faker');

module.exports = {
    fakeCollection(req, res) {
        const {
            amountOfRecords,
            recordMetadata,
        } = req.body;
        const records = [];

        for (let i = 1; i <= amountOfRecords; i += 1) {
            records.push(generateRecordFromMetadata(recordMetadata));
        }
        return res.json(records);
    }
};
