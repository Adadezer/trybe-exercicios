'use strict';

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
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Construindo Aplicações com NodeJS',
        author: 'William Bruno Moraes',
        page_quantity: 272,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'CSS Grid Layout: Criando Layouts CSS',
        author: 'Maurício Samy Silva',
        page_quantity: 176,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
    await queryInterface.bulkDelete('Books', null, {});
  }
};
