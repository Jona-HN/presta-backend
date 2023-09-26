'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Material.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    unidades_disponibles: DataTypes.INTEGER,
    fecha_adquisicion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'Materiales',
    name : {
      singular: 'material',
      plural: 'materiales'
    }
  });
  return Material;
};