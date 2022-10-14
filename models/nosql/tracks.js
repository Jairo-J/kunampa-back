const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksSchema =  new mongoose.Schema({
    name: {
        type: String
    },
    album: {
        type: String
    },
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true;
            },
            message: 'ERROR_URL'
        }
    },
    artist: {
        name: {
            type: String
        },
        nickname: {
            type: String
        },
        nationality: {
            type: String
        }
    },
    duration: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    mediaId: {
        type: mongoose.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
});

TracksSchema.statics.findAllData = function (name) {
    const joinData = this.aggregate([
        {
            $lookup: {
                from: 'storages',       // Modelo a relacionarse
                localField: 'mediaId',  // Campo q hace de llave primaria
                foreignField: '_id',    // Campo q hace de llave foranea
                as: 'audio'             // Alias para lo obtenido
            }
        }
    ]);
    return joinData;
}

TracksSchema.plugin(mongooseDelete, {overrideMethods: 'all'});
module.exports = mongoose.model('tracks', TracksSchema)
