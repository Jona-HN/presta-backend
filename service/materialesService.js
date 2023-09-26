const models = require('../models');

const getAll = async function()
{
    return await models.Material.findAll();
}

module.exports.getAll = getAll;