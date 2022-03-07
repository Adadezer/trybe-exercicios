const Book = (Sequelize, DataTypes) => {
  const Book = Sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Books',
    }
  );
  return Book;
};

module.exports = Book;