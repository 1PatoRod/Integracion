const axios = require('axios');
//We require the necessary auxiliaries for the controllers...
const { Location } = require('../../db');
const { auxGetAllCharacterApi, auxGetAllCharacterDB, auxGetCharacterDetailApi, auxGetCharacterDetailDB, validateUUID, validateUUIDv4, validateNum, auxGetSearchNameApi, auxGetSearchNameDB } = require('./auxControllers')

//==============================================getAllCharacter==============================================\\

const getAllCharacter = async () => {
    try {
        const getApi = await auxGetAllCharacterApi();
        const getDB = await auxGetAllCharacterDB();
        if(!getApi && !getDB) throw new Error ('No videogames found in the database or web API');
        return [...getDB, ...getApi];
    } catch (error) {
        return {error : error.message};
    }
};
//=============================================getCharacterDetail=============================================\\
const getCharacterDetail = async (id) => {
    try {
        if(!validateUUID(id) && !validateUUIDv4(id) && !validateNum(id)) throw new Error('invalid params, try a number or UUID');
        if(validateUUID(id) || validateUUIDv4(id)){
            const getDBDetail = await auxGetCharacterDetailDB(id);
            return [getDBDetail];
        };
        if(validateNum(id)){
            const getApiDetail = await auxGetCharacterDetailApi(id);
            return [getApiDetail];
        };
        // throw new Error('invalid params, try a number or UUID');
    } catch (error) {
        return {error : error.message}
    };
};
//==============================================getSearchName==============================================\\


const getSearchName = async (name) => {
    try {
        const getApiSearchName = await auxGetSearchNameApi(name);
        const getDBSearchName = await auxGetSearchNameDB(name);
        if(!getApiSearchName && !getDBSearchName) throw new Error(`The videogame ${name} was not found in the database or web API`)
        return [ ...getDBSearchName , ...getApiSearchName ]
    } catch (error) {
        return { error : error.message }
    }
};
//==================================================getLocation==================================================\\
//Function that gets all genres from the API .
//Funcion que obtiene todos los generos de la API.
////////////////////NO ready////////////////////
const getLocation = async () => {
    try {
        const allLocation = (await axios("https://rickandmortyapi.com/api/location")).data;
        const locationInfo = await allLocation?.results?.map( location => {
            return {
                id: location.id,
                name: location.name,
                url: location.url,
            }
        });
        if(!allLocation||!locationInfo) throw new Error('Location not found')
        locationInfo.forEach(element => {
            Location.findOrCreate({
                where: {
                    id: element.id,
                    name: element.name,
                    url: element.url,
                }
            });
        });
        const fullLocation =await Location.findAll()
        console.log('fullLocation', fullLocation);
        return fullLocation;
    } catch (error) {
        return {error : error.message};
    }
};
//==============================================EXPORT CONTROLLERS==============================================\\

module.exports = { getAllCharacter, getCharacterDetail, getSearchName, getLocation };