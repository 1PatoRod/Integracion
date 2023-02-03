const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { json } = require('express');

const app = express();

app.use(express.json());
app.use(morgan('dev'));


let fav = [];

//============================================ROUTES=================================================\\

app.get('/rickandmorty/character/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        const data = response.data;

        const infoCharacter = {
            id: data.id,
            name : data.name,
            species : data.species,
            status : data.status,
            gender : data.gender,
            origin : data.origin,
            location : data.location,
            image : data.image,
            
        };

        res.status(200).json(infoCharacter)
    } catch (error) {
        res.status(404).json({error : error.message})
    }
})

app.get('/rickandmorty/detail/:detailId', async (req, res) => {
    try {
        const {detailId} = req.params;
        const result = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const data = result.data;

        const characterDetail = {
            id: data.id,
            name : data.name,
            species : data.species,
            status : data.status,
            gender : data.gender,
            origin : data.origin,
            location : data.location,
            image : data.image,
            episodes : data.episodes,
        };
        res.status(200).json(characterDetail)
    } catch (error) {
        res.status(404).json({error : error.message})
    }
})

app.get('/rickandmorty/fav', (req, res) => {//no maneja asyncronia
    res.status(200).json(fav);
})

app.post('/rickandmorty/fav', (req, res) => {
    fav.push(req.body)
    
    res.status(200).send('guardado')
})

app.delete('/rickandmorty/fav/:id', (req, res) => {
    const { id } = req.params;
    try {
        const favFilter = fav.filter(char => char.id !== Number(id));
        fav = favFilter;
        res.status(200).json({message : 'se elimino coreectamente'})
    } catch (error) {
        res.status(400).json({error : error.message})
    }

});

//=========================================FIN====ROUTES=============================================\\

module.exports = app;