var app = require('./config/server');

/* var rotaHome = require('./app/routes/home');
var rotaNoticias = require('./app/routes/noticias');
var rotaFormIncluNoticia = require('./app/routes/formulario_inclusao_noticia');

rotaHome(app);
rotaNoticias(app);
rotaFormIncluNoticia(app); */

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});