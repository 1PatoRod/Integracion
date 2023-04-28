const  { Character } = require('../../db');


const postCharacter = async (character) => {
    try {
        const { name, status, genre, image, location, origin, species } = character;

        if(!name || !status || !genre || !location || !origin || !species ) throw Error ('The params are not complete')
        if(!image) image = 'https://th.bing.com/th/id/OIP.hUFgLL5bg9jY28e0MMKtKgHaEK?pid=ImgDet&rs=1';

        const newCharacter = { name, status, genre, image, location, origin, species };

        if(!newCharacter) throw new Error('Failed to created character')

        const chater = await Character.create( newCharacter );
        await chater.addLocation(location);
        await chater.addOrigin(origin);
        await chater.addSpecies(species);

        return newCharacter;
    } catch (error) {
        return {error: error.message}
    }
};

module.exports = { postCharacter }