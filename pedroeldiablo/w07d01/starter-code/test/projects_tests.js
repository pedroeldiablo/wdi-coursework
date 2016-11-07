process.env.NODE_ENV = "test";

const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const app =require('../app');
const api = supertest(app);
const Project = require ('../models/project');

// Dogs Index
describe('GET /projects', () => {

  before(done => {
    Project.collection.drop();
    Project.create({
      title: "Monday Sucks",
      github: "http://github.com/username/monday-sucks",
      url: "http://monday-sucks.com",
      users:["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"],
    }, done);
  });

  it('should return a 200 response', (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .expect(200, done);
  });


  it('should return array', (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
    });
  });
});

describe('GET /projects/:id', () => {
  let projectId = null;

  before(done => {
    Project.collection.drop();
    Project.create({
      title: "Monday Sucks More",
      github: "http://github.com/username/monday-sucks-more",
      url: "http://monday-sucks-more.com",
      users:["582080b42ed15c3df06eaa53", "582080b42ed15c3df06eaa56"],
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });
  it('should return a 200 response', (done) => {
    api.get(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .expect(200, done);
  });


  it('should return an object containing fields title, github, url, and users', (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body[0]).to.have.property('title');
        expect(res.body[0]).to.have.property('github');
        expect(res.body[0]).to.have.property('url');
        expect(res.body[0]).to.have.property('users');
        done();
      });
  });
});

describe('POST /projects', () => {
  beforeEach(done => {
    Project.collection.drop();
    done();
  });

  it('should return a 201 response', (done) => {
    api.post('/projects')
    .set('Accept', 'application/json')
    .send({
      title: "Monday Sucks More",
      github: "http://github.com/username/monday-sucks-more",
      url: "http://monday-sucks-more.com",
      users:["582080b42ed15c3df06eaa53", "582080b42ed15c3df06eaa56"],
    })
    .expect(201, done);
  });

//
  it('should return an object', (done) => {
    api.post('/projects')
      .set('Accept', 'application/json')
      .send({
        title: "Monday Sucks More",
        github: "http://github.com/username/monday-sucks-more",
        url: "http://monday-sucks-more.com",
        users:["582080b42ed15c3df06eaa53", "582080b42ed15c3df06eaa56"],
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
    });
  });
});
//
//
  // it('should return correctly formed data', (done) => {
  //   api.post('/projects')
  //     .set('Accept', 'application/json')
  //     .send({
  //       title: "Monday Sucks More",
  //       github: "http://github.com/username/monday-sucks-more",
  //       url: "http://monday-sucks-more.com",
  //       users:["582080b42ed15c3df06eaa53", "582080b42ed15c3df06eaa56"],
  //     })
  //     .end((err, res) => {
  //       expect(res.body).to.have.property('title');
  //       expect(res.body).to.have.property('github');
  //       expect(res.body).to.have.property('url');
  //       expect(res.body).to.have.property('users');
  //       done();
  //     });
  // });
// });
//

// //
// //
//   it('should return an array', (done) => {
//     api.get(`/projects/${projectId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.body).to.be.an('array');
//         done();
//       });
//   });
//
//   it('should return correctly formed data', (done) => {
//     api.get(`/projects/${projectId}`)
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.body).to.have.property('title');
//         expect(res.body).to.have.property('github');
//         expect(res.body).to.have.property('url');
//         expect(res.body).to.have.property('users');
//         done();
//       });
//   });
// });
// // });

// //
describe('PUT /projects/:id', () => {

  let projectId = null;

  beforeEach(done => {
    Project.collection.drop();
    Project.create({
      title: "Monday Sucks More",
      github: "http://github.com/username/monday-sucks-more",
      url: "http://monday-sucks-more.com",
      users:["582080b42ed15c3df06eaa53", "582080b42ed15c3df06eaa56"],
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });
  it('should return a 200 response', (done) => {
    api.put(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .send({
        title: "Monday Sucks",
        github: "http://github.com/username/monday-sucks",
        url: "http://monday-sucks.com",
        users:["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"],
      })
      .expect(200, done);
  });

//
//
  it('should return an object', (done) => {
    api.put(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .send({
        title: "Monday Sucks",
        github: "http://github.com/username/monday-sucks",
        url: "http://monday-sucks.com",
        users:["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"],
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
// //
// //
// //
//   it('should return correctly formed data', (done) => {
//     api.put(`/projects/${projectId}`)
//       .set('Accept', 'application/json')
//       .send({
//         title: "Monday Sucks",
//         github: "http://github.com/username/monday-sucks",
//         url: "http://monday-sucks.com",
//         users:["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"],
//       })
//       .end((err, res) => {
//         expect(res.body.title).to.equal('Monday Sucks');
//         expect(res.body.github).to.equal('http://github.com/username/monday-sucks');
//         expect(res.body.url).to.equal('http://monday-sucks.com');
//         expect(res.body.users).to.equal(["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"]);
//         done();
//       });
//   });
// });
//
describe('DELETE /projects/:id', () => {

  let projectId = null;

  beforeEach(done => {
    Project.collection.drop();
    Project.create({
      title: "Monday Sucks",
      github: "http://github.com/username/monday-sucks",
      url: "http://monday-sucks.com",
      users:["582080b42ed15c3df06eaa54", "582080b42ed15c3df06eaa55"],
      //
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it('should return a 204 response', (done) => {
    api.delete(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .expect(204, done);
  });

  it('should have actually deleted the project!', (done) => {
    api.delete(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        Project.find((err, projects) => {
          expect(projects.length).to.equal(0);
          done();
        });
      });
  });
});
