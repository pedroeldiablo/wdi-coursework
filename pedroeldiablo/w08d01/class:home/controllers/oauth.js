const request =require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../config/tokens').secret;

function facebook(req, res) {
  // request an access token
  request.get({
    url: 'https://graph.facebook.com/v2.5/oauth/access_token',
    qs: {
      code: req.body.code,
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: req.body.redirectUri
    },
    json: true
  }).then((accessToken) => {

    // request user's profile with accessToken
    return request.get({
      url: 'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture',
      qs: accessToken,
      json: true
    });

  }).then((profile) => {

    // find or create a user
    User.findOne({email: profile.email}, (err, user) => {
      if(err) return res.status(500).json({ error: err});

      if(!user) {
        user = new User({
          facebookId: profile.id,
          profileImage: profile.picture.data.url,
          email: profile.email,
          username: `${profile.name} ${profile.id}`
        });
      } else {
        user.facebookId = profile.id;
        user.profileImage = profile.picture.data.url;
      }
      user.save((err, user) => {
        if(err) return res.status(400).json({error: err});
        // generate JWT and send to client
        const payload = {_id: user._id, username: user.username};
        const token = jwt.sign(payload, secret, {expiresIn: '24h'});

        res.status(200).json({
          user,
          token
        });
      });
    });
  });
}

function github(req, res) {
  request.post({
    url: 'https://github.com/login/oauth/access_token',
    qs: {
      code: req.body.code,
      client_id: process.env.GITHUB_APP_ID,
      client_secret: process.env.GITHUB_APP_SECRET,
      redirect_uri: req.body.redirectUri
    },
    json: true
  }).then((accessToken) => {
    return request.get({
      url: 'https://api.github.com/user?access_token=user,gist,user:email',
      qs: accessToken,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    });
  }).then((profile) => {
    User.findOne({ id: profile.id }, (err, user) => {
      if(err) return res.status(500).json({ error: err });
      if(!user) {
        user = new User({
          githubId: profile.id,
          // profileImage: profile.avatar_url,
          // email: profile.email,
          username: `${profile.name} ${profile.id}`
        });
      } else {
        user.githubId = profile.id;
        // user.profileImage = profile.avatar_url;
      }
      user.save((err, user) => {
        if(err) return res.status(400).json({ error: err});
        const payload = { _id: user._id, username: user.username };
        const token = jwt.sign(payload, secret, { expiresIn: '24h' });
        res.status(200).json({
          user,
          token
        });
      });
    });
  });
}

module.exports = {
  facebook,
  github
};
