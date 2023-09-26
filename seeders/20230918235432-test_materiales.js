'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Materiales', [
     {
      nombre: 'Resistencia',
      descripcion: 'Resistencia de 10K Ohms',
      unidades_disponibles: 100,
      fecha_adquisicion: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nombre: 'Fuente',
      descripcion: 'Fuente de alimentación variable',
      unidades_disponibles: 10,
      fecha_adquisicion: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nombre: 'Multímetro',
      descripcion: 'Multímetro para CD y CA',
      unidades_disponibles: 5,
      fecha_adquisicion: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nombre: 'Osciloscopio',
      descripcion: 'Osciloscopio de 2 canales',
      unidades_disponibles: 10,
      fecha_adquisicion: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nombre: 'Motor',
      descripcion: 'Motor de 12V',
      unidades_disponibles: 5,
      fecha_adquisicion: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Materiales', null, {});
  }
};
