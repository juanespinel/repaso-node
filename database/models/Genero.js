module.exports = function(sequelize, dataTypes) {
    let alias = "Genero";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: true
    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }

    return Genero
}