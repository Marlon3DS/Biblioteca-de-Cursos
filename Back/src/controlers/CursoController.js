const mongoose = require('mongoose');
const Curso = mongoose.model('Curso');
module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const cursos = await Curso.paginate({},{ page, limit: 1 });
        return res.json(cursos);
    },
    async show(req, res){
        const curso = await Curso.findById(req.params.id);
        return res.json(curso);
    },
    async store(req, res){
        const curso = await Curso.create(req.body);
        res.json(curso);
    },
    async update(req, res){
        const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(curso);
    },
    async destroy(req, res){
        await Curso.findByIdAndRemove(req.params.id);
        return res.send();
    }
};