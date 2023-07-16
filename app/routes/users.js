var express = require('express');
var HandleActionsGithub = require('../domain/handle_actions_github')
var router = express.Router();

/* GET users since. */
router.get('/', async function(req, res, next) {
  const since = req.query.since;
  
  const github = new HandleActionsGithub(since)
  
  const host = req.get('host');
  const protocol = req.protocol;
  const appLink = `${protocol}://${host}`;
  
  const response = await github.handle_get_by_since(since, appLink)
  
  res.json(response);
});

module.exports = router;
