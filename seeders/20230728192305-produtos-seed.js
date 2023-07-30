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
    await queryInterface.bulkInsert('produtos', [
      { nome: 'Produto 1', fabricantesId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Produto 2', fabricantesId: 1, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Produto 3', fabricantesId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Produto 4', fabricantesId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
