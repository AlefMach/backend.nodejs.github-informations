var express = require('express');
var HandleActionsGithub = require('../domain/handle_actions_github')
var router = express.Router();

/* GET users since. */
router.get('/', async (req, res) => {
  const since = req.query.since;
  
  const github = new HandleActionsGithub()
  
  const host = req.get('host');
  const protocol = req.protocol;
  const appLink = `${protocol}://${host}`;
  
  const response = await github.handle_get_by_since(since, appLink)
  
  res.json(response);
});

/* GET details username. */
router.get('/:username/details', async (req, res) => {
  const username = req.params.username;
  
  const github = new HandleActionsGithub()

  const response = await github.handle_get_details(username)

  response.status == 200 ? res.json(response) : res.json({'status': 'failed', 'message': 'User not found'})
});

module.exports = router;
