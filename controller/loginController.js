const loginService = require('../service/loginService.js');

const validateCredentials = async function(req, res)
{
    const email = req.body.email;
    const password = req.body.password;
    let validUser = await loginService.validateCredentials(email, password);
    
    await res.json(validUser);
}

module.exports.validateCredentials = validateCredentials;