
const getMain = (request, response) =>{
    try{
  response.send('y quien coño es fede????')
    }catch(error){
        response.send(error)
    }
}

const getSiga = (request, response) =>{
    try{
  res.send('Got a POST request')
    }catch(error){
        response.send(error)
    }
}

module.export = {
    getMain, getSiga
}