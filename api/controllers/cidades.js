const uuidv4 = require('uuid/v4');


module.exports = app => {
  
  const cidadesDB = app.data.cidades;
  const controller = {};

  const { cidades: cidadesMock, } = cidadesDB;

  controller.getCidades = (req, res) => res.status(200).json(cidadesDB);

  controller.postCidade = (req, res) => {
    cidadesMock.data.push({
      id: uuidv4(),
      cidade: req.body.cidade,
      estado: req.body.estado,
      codMunIbge: req.body.codMunIbge
    });

    res.status(201).json(cidadesMock);
  }
  
  return controller;
}