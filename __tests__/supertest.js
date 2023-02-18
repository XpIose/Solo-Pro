const { response } = require('express');
const request = require('supertest');
const fs = require('fs')
const path = require('path')
const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json')

const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  
  });

  describe('/markets', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/markets')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });

    
      xit('markets from "DB" json are in body of response', () => {
        return request(server)//.send([{something: something}])
          //get the markets.dev.json file?
          // .get('/markets')
          // .expect('Content-Type', /application\/json/)
          // // .expect(200)
          // // .expect(marketList).toBe([{"test" : "test2"}])
          // .then((res) => {
          //   // console.log('TESTING!', res.body);
          //   console.log(JSON.parse(fs.readFileSync(testJsonFile)));
          //   expect(res.body).toEqual(JSON.parse(fs.readFileSync(testJsonFile)))
          // })
          // .then(response => {
          //   console.log(request.Response)
          //   console.log(response.body);
          // })
          const marketList = [
            {}
          ]
      });
    });

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => {
        const marketList = [
          {cards: 0, location: 'Fairfax'},
          {cards: 5, location: 'LA'},
        ]
        return request(server)
          .put('/markets')
          .expect(200)
          .send(marketList)
          .expect('Content-Type', /application\/json/)  // regex
          // .expect('Content-Type', 'application/json')    // string -- NOT WORKING FOR SOME REASON
      });

      it('responds with the updated market list', () => {
        const newMarketList = [
          {cards: 0, location: 'Fairfax'},
          {cards: 5, location: 'LA'},
        ]
        return request(server)
         .put('/markets')
         .send(newMarketList)
        .then( (res) => {
        // expect(res.body).toStrictEqual(JSON.parse(fs.readFileSync(testJsonFile)))});
        expect(res.body).toEqual(newMarketList)});
      });

      it('responds to invalid request with 400 status and error message in body', () => {
        return request(server)
        .put('/markets')
        .expect(400)
        .then((res) => {
          console.log(res.body)
          return expect(res.body).toEqual({error: {}});
          // return expect(res.body).toHaveProperty("error");  // ALTERNATIVE WORKS TOO
        })
      });
    });
  });
});
