const Book = (Sequelize, DataTypes) => {
  const Book = Sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE
    },
    {
      timestamps: false
    }
  );
  return Book;
};

module.exports = Book;