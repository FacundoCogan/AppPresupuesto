class Egreso extends Dato{
    static contadorEgresos=0;

    constructor(d, v){
        super(d, v);
        this._id=++Egreso.contadorEgresos;
    }

    get id(){
        return this._id;
    }
}