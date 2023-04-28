const axios = require('axios');

const { Character, Location } = require('../../db');

//=============================================AUX GetAllCharacter=============================================\\
///////Ready/////////
const auxGetAllCharacterApi = async () => {
    const apiResponse = (await axios(`https://rickandmortyapi.com/api/character`)).data.results;
    const characterInfo = await apiResponse?.map(char => {
        return {
            id: char.id,
            name: char.name,
            image: char.image,
            species: char.species,
            status: char.status,
            gender: char.gender,
            origin: char.origin.name,
            location: char.location.name,
        }
    })
    return characterInfo;
};
/////Ready//////
const auxGetAllCharacterDB = async () => {
    const dbResponse = await Character.findAll();
    const dbInfo = await dbResponse?.map(char => {
        return {
            id: char.id,
            id: char.id,
            name: char.name,
            image: char.image,
            species: char.species,
            createdInDb: char.createdInDb,
        }
    })
    return dbInfo;
}
//============================================AUX GetVideoGameDetail============================================\\

const auxGetCharacterDetailApi = async (id) => {
    const apiResponse = (await axios(`https://rickandmortyapi.com/api/character/${id}`) ).data;

    if(apiResponse) {
        const charactersInfo = {
            id: apiResponse.id,
            name: apiResponse.name,
            image: apiResponse.image,
            species: apiResponse.species,
            status: apiResponse.status,
            gender: apiResponse.gender,
            origin: apiResponse.origin.name,
            location: apiResponse.location.name,
        }
        return charactersInfo;
    }
};

const auxGetCharacterDetailDB = async (id) => {
    const dbResponse = await Character.findAll({
        where: { id },
        include: {
            model: Location,
            as: 'Location',
            through: {
            attributes: [],
            },
        }
    });
    // return dbResponse;
    if(dbResponse){
    const dbResponseCharac = dbResponse[0];
    // return dbFindResponse;

        const dbVideoGamesInfo = {
            id: dbResponseCharac.id,
            name: dbResponseCharac.name,
            image: dbResponseCharac.image,
            species: dbResponseCharac.species,
            status: dbResponseCharac.status,
            gender: dbResponseCharac.gender,
            origin: dbResponseCharac.origin,
            location: dbResponseCharac.location,
        }
        return dbVideoGamesInfo;
    } else {
        return null;
    }
};
//Aqui abajo valido si la id es una uuid y la siguiente uuidv4.
const validateUUID = (uuid) => {
    const valid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return valid.test(uuid)
};
const validateUUIDv4 = (uuid) => {
    const valid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return valid.test(uuid)
};
const validateNum = (id) => {
    const valid = typeof Number(id) === 'number';
    if(valid) return true;
    else return false;
}
//===============================================AUX SEARCHBYNAME===============================================\\
//Function that searches videogame by name, in first time from the API and second time from our DB.
//Funcion que busca por videogame por nombre, en la primera desde la API y la segunda desde nuestra DB.
const auxGetSearchNameApi = async (name) => {
    const firstResponse = (await axios(`https://rickandmortyapi.com/api/character?name=${name}`)).data.results;

    const apiResponse = firstResponse?.map(char => {
            return {
                id: char.id,
                name: char.name,
                image: char.image,
                species: char.species,
                status: char.status,
                gender: char.gender,
                origin: char.origin.name,
                location: char.location.name,
        }
    })
    const result = apiResponse.slice(0,15);
    return result;
};

const auxGetSearchNameDB = async (name) => {
    const charName = name.toLowerCase();
    const dbResponse = await Character.findAll({
        include: {
            model: Location,
            as: 'Location',
            through: {
            attributes: [],
            },
        }
    });
    const dbResult = await dbResponse.filter( charac => charac.name.toLowerCase().includes(charName) === true);
    const dbCharacterInfo = dbResult.map(char => {
        return {
            id: char.id,
            name: char.name,
            image: char.image,
            species: char.species,
            status: char.status,
            gender: char.gender,
            origin: char.origin,
            location: char.location,
        }
    });
    return dbCharacterInfo;
};
//===============================================EXPORT FUNCTIONS===============================================\\

module.exports = { auxGetAllCharacterApi, auxGetAllCharacterDB, auxGetCharacterDetailApi, auxGetCharacterDetailDB, validateUUID, validateUUIDv4, validateNum, auxGetSearchNameApi, auxGetSearchNameDB };