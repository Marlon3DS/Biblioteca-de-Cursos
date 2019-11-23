const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CursoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    path: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

CursoSchema.plugin(mongoosePaginate);
mongoose.model('Curso', CursoSchema);
