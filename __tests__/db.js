
const fs = require('fs');
const path = require('path');
const { mark } = require('regenerator-runtime');
const db = require('../server/db/markets.js');

const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

describe('db unit tests', () => {
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      db.reset();
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  });

  describe('#sync', () => {
    it('writes a valid marketList to the JSON file', () => {
      const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });

    // TODO: Finish unit testing the sync function

    it('overwrites previously existing markets', () => {
      const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).not.toBe(marketList);
    });

    it('returns an error when location and/or cards fields are not provided', () => {
      const marketList = [{ location: 'here'}, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).toBeInstanceOf(Error);
    });

    /**
     *  TODO: Type validation is not yet correctly implemented! Follow the TDD
     *  (test driven development) approach:
     *    1. Write a test describing the desired feature (db.sync returns a
     *      TypeError when the types are wrong)
     *    2. Confirm that your tests fail
     *    3. Follow the errors to implement your new functionality
     */
    it('returns an error when location value is not a string', () => {
          const marketList = [{ location: 88, cards: 11 }, { location: 'there', cards: 0 }];
          const result = db.sync(marketList);
          expect(result).toBeInstanceOf(Error);
    });

    it('returns an error when cards value is not a number', () => {
          const marketList = [{ location: 'here', cards: 'word' }, { location: 'there', cards: 0 }];
          const result = db.sync(marketList);
          expect(result).toBeInstanceOf(Error);
    });
  });

  // Extension TODO: Unit test the #find and #drop functions
  describe('#find', () => {
    xit('returns list of all markets from the json file', () => {
    });

    xit('works if the list of markets is empty', () => {
    });
  });

  describe('#drop', () => {
    xit('writes an empty array to the json file', () => {
    });
  });
});
