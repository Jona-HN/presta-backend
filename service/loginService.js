const models = require('../models');

const validateCredentials = async function(email, password)
{
    let count = await models.Usuario.count({
        where: {
            correo: email,
            contrasena: password
        }
    });

    return count == 1;
}

module.exports.validateCredentials = validateCredentials;