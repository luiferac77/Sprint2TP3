import express from 'express';
import { 
            obtenerSuperHeroePorIdController, 
            obtenerTodosLosSuperHeroesController, 
            buscarHeroesPorAtributoController,
            obtenerMayoresDe38Controller 
        } from '../controllers/superHeroController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/mayores-38', obtenerMayoresDe38Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarHeroesPorAtributoController); //cuando uso req.params
//router.get('/heroes/buscar', buscarHeroesPorAtributoController);// cuando uso req.query;
router.get('/heroes/:id', obtenerSuperHeroePorIdController);

export default router;