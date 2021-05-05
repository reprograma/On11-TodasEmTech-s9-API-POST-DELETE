const { Router } = require('express');
const { name , version } = require('../../package.json');
const router = Router();

router.get('/', (require, response) => {

    response.status(200).send([{

        'titulo' : `${name}-Beatriz`,
         version,
        'mensagem' : 'Bem vindes ao Vale <3'
    }])
});

module.exports = router;