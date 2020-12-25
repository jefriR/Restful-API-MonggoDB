const mongoose = require('mongoose');

const MahasiswaSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nim: {
        type: Number,
        require: true
    },
    major: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);