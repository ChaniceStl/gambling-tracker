'use strict'

module.exports = function(sequelize, DataTypes){
	var Player = sequelize.define('Player', {
		name:{
			type:DataTypes.STRING,
			validate:{
				len :[1, 50],
        notEmpty: true
			}
		},
		//initial money player came in with 
		monies:{
			type: DataTypes.INTEGER,
			validate:{
				notNull: true,
				isNumeric: true,
				isDecimal: true
			}
		},
		//will show the bets for the current pot (ex:until a player whens the pot)
		currentBet:{
		 	type:DataTypes.INTEGER,
		 	validate:{
				isNumeric: true,
				isDecimal: true
			}
		},
		//will show bet lost from start to fin
		allBet:{
		 	type:DataTypes.INTEGER,
		 		validate:{
				isNumeric: true,
				isDecimal: true
			}
		}
	}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Player.belongsToMany(models.Table, {through: 'Player_Table'});

      }
    }
	})
	return Player
}