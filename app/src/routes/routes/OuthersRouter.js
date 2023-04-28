const router = require('express').Router();
const { getLocationHandler } = require('../handlers/charactersHandlers')

router.get('/location', getLocationHandler);

module.exports = router;