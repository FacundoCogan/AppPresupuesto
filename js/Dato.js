class Dato{
    constructor(d, v){
        this._descripcion=d;
        this._valor=v;
    }

    get descripcion()
    {
        return this._descripcion;
    }

    set descripcion(d)
    {
        this._descripcion=d;
    }

    get valor(){
        return this._valor;
    }

    set valor(v){
        this._valor=v;
    }
}