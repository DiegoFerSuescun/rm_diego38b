const express = require ('express');
const server = express();
const router = require ('./routes/index.js');
const PORT = 3001;
const morgan = require ('morgan');

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json());
server.use(morgan('dev'));

server.use('/rickandmorty', router);

server.listen(PORT, () =>{
    console.log('Server  reaised in port: '+ PORT);
});



//----------------------------------------------------------

// const http = require("http");
// const getCharById = require("./controllers/getCharById.js");
// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").pop();
//         getCharById(res, id)
//     }
// })
// .listen(PORT, "localhost");