module.exports = function(sequelize, DataTypes) {
   var Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    author: DataTypes.STRING
  }, {
    tableName: 'question', // this will define the table's name
    timestamps: true, // this will deactivate the timestamp columns
    associate: function(models) {
      Question.hasMany(models.Answer)
    }

  });
 return Question;
}
