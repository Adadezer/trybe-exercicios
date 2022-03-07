'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('Books',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      author: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'page_quantity',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'), // https://stackoverflow.com/questions/20386402/sequelize-unknown-column-createdat-in-field-list
        field: 'created_at',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Books');
  }
};
