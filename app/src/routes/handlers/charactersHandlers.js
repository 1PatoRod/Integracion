const { getAllCharacter, getCharacterDetail, getSearchName, getOrigin, getLocation, getSpecies } = require('../controller/getcontroller')
const { postCharacter } = require('../controller/postcontroller')

const getAllCharacterHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if(name){
            const games = await getSearchName(name)
            res.status(200).json(games)
        } else {
            const games = await getAllCharacter();
            res.status( 200 ).json( games );
        }
    } catch ( error ) {
        res.status( 404 ).json({ error : error.message });
    }
};

const getCharacterDetailHandler =  async (req, res) => {
    try {
        const { idCharacter} = req.params;
        if(!idCharacter) throw new Error('Invalid param, id is not provided');
        const game = await getCharacterDetail( idCharacter );
        res.status( 200 ).json( game );
    } catch ( error ) {
        res.status( 404 ).json({ error : error.message });
    }
};
//////////////
const getLocationHandler = async (req, res) => {
    try {
        const location = await getLocation()
        res.status( 200 ).json(location)
    } catch ( error ) {
        res.status( 404 ).json({ error : error.message });
    }
};
////////Ready////////
const postCharacterHandler = async (req, res) => {
    try{
        const characterBody = req.body;
        const character = await postCharacter(characterBody);

        res.status(200).json(character)
    } catch ( error ) {
        res.status( 400 ).json( { error : error.message } );
    }
};


module.exports = { getAllCharacterHandler, getCharacterDetailHandler, postCharacterHandler, getLocationHandler };