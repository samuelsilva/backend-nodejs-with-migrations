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
    // Adicionar dados de exemplo na tabela "fabricantes"
    await queryInterface.bulkInsert('fabricantes', [
      { nome: 'Fabricante 1', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Fabricante 2', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Fabricante 3', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // Remover os dados de exemplo inseridos nos "fabricantes"
    await queryInterface.bulkDelete('fabricantes', null, {});
  }
};
