const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('about', {header:'About'}));
router.get('/about', (req, res) => res.render('about', {header:'About'}));
router.get('./candidates/clinton', (req, res) => res.render('clinton',{header:'Clinton'}));
router.get('/headtohead', (req, res) => res.render('headtohead', {header: 'Head to Head'}));
// router.get('./candiates/trump', (req, res) => res.render('candidates', {header: 'Trump'}));
router.get('/candidates', (req, res) => res.render('candidates', {header: 'Trump'}));

module.exports = router;
