import { 
            obtenerSuperHeroePorId, 
            obtenerTodosLosSuperHeroes, 
            buscarHeroesPorAtributo, 
            obtenerSuperHeroesMayoresDe38 
        } from "../services/superHeroService.mjs";

import { renderizarSuperHeroe, renderizarListaSuperHeroes } from "../views/responseView.mjs";

export const obtenerSuperHeroePorIdController = async (req, res) => {
    const {id} = req.params;
    const superheroe = await obtenerSuperHeroePorId(id);

    if(superheroe){
        res.send(renderizarSuperHeroe(superheroe));
    } else {
        res.status(404).send({mensaje: "superheroe no encontrado"});
    }
}

export const obtenerTodosLosSuperHeroesController = async (req, res) => {
    const superheroes = await obtenerTodosLosSuperHeroes();
    if(superheroes){
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({mensaje: "Superheroes no encontrados"});
    }
}

export const buscarHeroesPorAtributoController = async (req, res) => {
    //si quiero usar req.params la ruta en postman será por ejemplo
    //http://localhost:3000/api/heroes/buscar/nombreReal/Peter%20Parker

    //si quiero usar req.query la ruta de postman será por ejemplo 
    //http://localhost:3000/api/heroes/buscar?atributo=nombreReal&valor=Peter%20Parker

    const {atributo, valor} = req.params; //esto es para params
    //const {atributo, valor} = req.query; //esto es para query params
    const superheroes = await buscarHeroesPorAtributo(atributo, valor);

    if(superheroes.length > 0) {
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({mensaje: "no se encontraron superheroes con ese atributo"});
    }
}

export const obtenerMayoresDe38Controller = async (req, res) => {
    const superheroes = await obtenerSuperHeroesMayoresDe38();
    if(superheroes){
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({mensaje: "superheros no encontrados"});
    }
}