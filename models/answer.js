module.exports = function(sequelize, DataTypes) {
   var Answer = sequelize.define('Answer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.TEXT,
    article:DataTypes.TEXT,
    itemId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    tableName: 'answer', // this will define the table's name
    timestamps: true, // this will deactivate the timestamp columns
    // associate: function(models) {
    //   Answer.belongsTo(models.Question);
    // }
    associate: function(models) {
      Answer.belongsTo(models.Item);
    }

  });
 return Answer;
}
