const mysql = require('../mysql');

exports.cadastrarUsuario = async (req, res, next) => {
    try {
        mysql.execute(`
            INSERT INTO usuarios(nome, endereco, email, senha) 
            VALUES(?, ?, ?, ?);
        `,[
            req.body.nome,
            req.body.endereco,
            req.body.email,
            req.body.senha
        ]);
        console.log('<== Usuario cadastrado com Sucess ==>');
        return res.status(200).send({ mensage: 'Jogador cadastrado!' })
    } catch (error) {
        return res.status(500).send({ error: error });
    }
}

exports.getUsuarios = async (req, res, next) => {
    try{
        const results = await mysql.execute(`
            SELECT * FROM usuarios;
        `);
        console.log('<== Usuario cadastrado com Sucesso ==>');
        return res.status(200).send({results: results});
    } catch (error) {
        return res.status(500).send({error: error});
    }
}