class IRepository {
    obtenerPorId(id){
        throw new Error("Método 'obtenerId()' no implementado");
    }

    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerMayoresDe38(){
        throw new Error("Método 'obtenerMayoresDe38()' no implementado");
    }
}

export default IRepository;