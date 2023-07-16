const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('Testing github providers routes', () => {
  it('Should return a "Welcome to api" response to the root route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.equal('Welcome to api');
        done();
      });
  });

  it('Should return a object response when search all users with since', (done) => {
    request(app)
      .get('/api/users?since=0')
      .expect(200)
      .end((err, res) => {
        expect(typeof(res.body)).to.equal(typeof({}));
        done();
      });
  });

  it('Should return a object response when search some user by username', (done) => {
    request(app)
      .get('/api/users/alefmach/details')
      .expect(200)
      .end((err, res) => {
        expect(typeof(res.body)).to.equal(typeof({}));
        done();
      });
  });
});