module.exports  = app => {
  const controller = app.controllers.cidades;

  app.route('/api/cidades')
    .get(controller.getCidades)
    .post(controller.postCidade);    
}