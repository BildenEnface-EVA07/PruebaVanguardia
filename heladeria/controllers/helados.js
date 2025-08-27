
exports.getMain = (_request, response) =>{
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

/*module.export = {
    getMain, getSiga
}*/

const User = require('../models/User.js');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

