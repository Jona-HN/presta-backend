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
     await queryInterface.bulkInsert('Usuarios', [
      {
       matricula: '1111111',
       correo: 'admin@admin.com',
       contrasena: 'admin',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       matricula: '1168659',
       correo: 'herrera.jonathan@uabc.edu.mx',
       contrasena: '1234',
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
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
