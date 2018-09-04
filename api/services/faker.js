const faker = require('faker');

const TYPES = {
    url: faker.internet.url,
    name: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
    dateInPast: faker.date.past,
    dateInFuture: faker.date.future,
    number: faker.random.number,
    currency: faker.finance.amount,
};

module.exports = {
    generateRecordFromMetadata(metadata = {}) {
        const record = {};
        Object.keys(metadata).forEach((key) => {
            const type = metadata[key];
            if (TYPES[type]) {
                record[key] = TYPES[type]();
            }
        });
        return record;
    }
};