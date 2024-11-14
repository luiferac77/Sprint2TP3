import express from 'express';
import { 
            obtenerSuperHeroePorIdController, 
            obtenerTodosLosSuperHeroesController, 
            buscarHeroesPorAtributoController,
            obtenerMayoresDe30Controller 
        } from '../controllers/superHeroController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/mayores-30', obtenerMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarHeroesPorAtributoController); //cuando uso req.params
//router.get('/heroes/buscar', buscarHeroesPorAtributoController);// cuando uso req.query;
router.get('/heroes/:id', obtenerSuperHeroePorIdController);

export default router;