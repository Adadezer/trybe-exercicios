// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address, // Employee.hasMany para relacionamentos 1:N
      { foreignKey: 'employeeId', as: 'addresses' }); // foreignKey é o nome da coluna na tabela Adsress
  };

  return Employee;
};

// Employee.hasMany para relacionamentos 1:N (no id 4 ele cria um array de objetos pois esse id tem 2 address)
// Employee.hasOne para relacionamentos 1:1 (o id 4 fica em 2 objetos diferentes, cada um com seu address)