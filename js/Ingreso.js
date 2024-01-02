class Ingreso extends Dato{
    static contadorIngresos=0;

    constructor(d, v){
        super(d, v);
        this._id=++Ingreso.contadorIngresos;
    }

    get id(){
        return this._id;
    }
}