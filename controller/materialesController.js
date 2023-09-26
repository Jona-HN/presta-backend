const materialesService = require('../service/materialesService.js');

const getAll = async function(req, res)
{
    let materiales = await materialesService.getAll();
    await res.json(materiales);
}

module.exports.getAll = getAll;