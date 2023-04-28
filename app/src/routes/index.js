const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CharactersRouter = require('./routes/CharactersRouter')
const OuthersRouter = require('./routes/OuthersRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', CharactersRouter);
router.use('/', OuthersRouter);

module.exports = router;
