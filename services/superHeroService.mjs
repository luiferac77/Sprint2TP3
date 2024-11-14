import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export const obtenerSuperHeroePorId = async (id) => {
    return await SuperHeroRepository.obtenerPorId(id);
}

export const obtenerTodosLosSuperHeroes = async () => {
    return await SuperHeroRepository.obtenerTodos();
}

export const buscarHeroesPorAtributo = async (atributo, valor) => {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export const obtenerSuperHeroesMayoresDe30 = async () => {
    return await SuperHeroRepository.obtenerMayoresDe30();
}