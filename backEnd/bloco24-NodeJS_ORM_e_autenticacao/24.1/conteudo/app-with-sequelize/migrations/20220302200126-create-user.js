'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
      },
      // adicionamos um novo campo 'email' como foi feito no model !
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // field: 'created_at', // a coluna será criada no banco com este nome (boas praticas: no banco usamos snake_case, e no js camelCase)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // field: 'updated_at', // a coluna será criada no banco com este nome (boas praticas: no banco usamos snake_case, e no js camelCase)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};