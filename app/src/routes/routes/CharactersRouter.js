const router = require('express').Router();
const { getAllCharacterHandler, getCharacterDetailHandler, postCharacterHandler } = require('../handlers/charactersHandlers')

router.get('/character', getAllCharacterHandler);

router.get('/character/:idCharacter', getCharacterDetailHandler);



router.post('/character', postCharacterHandler)



module.exports = router;