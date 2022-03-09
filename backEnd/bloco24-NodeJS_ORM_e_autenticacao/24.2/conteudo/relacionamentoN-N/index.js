// index.js
const express = require('express');
const { Address, Employee, Book, User } = require('./models');

const app = express();

// RELACIONAMENTO 1:1
app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' }, // model: Address é da importação do model feita na linha 3, as: addresses é o mesmo nome q está no model de Employee.js, na linha 17
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// LAZY LOADING
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
    });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// RELACIONAMENTO N:N
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;