'use strict'

module.exports = function(sequelize, DataTypes){
	var Table = sequelize.define("Table", {
		currentPot:DataTypes.INTEGER,
		anti:{
		 	type:DataTypes.INTEGER,
		 	validate:{
		 		notNull: true,
				isNumeric: true,
				isDecimal: true
			}
		}
	}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Table.belongsToMany(models.Player, {through: 'Player_Table'});

      }
    }
	})
	return Table;
}