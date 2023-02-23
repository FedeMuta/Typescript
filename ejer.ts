class Turbina {
    private numTurbinas: number = 0;
    public constructor (n:number){
        this.numTurbinas = n;
    }
    public toString(){
        return this.numTurbinas + " turbina/s,";
    }
}

class Helice{
    private numHelices:number = 0;

    public constructor (n:number){
        this.numHelices = n;
    }
    public tuString(){
        return this.numHelices + " Helice/s,"
    }
}

class Alas {
    private alasDelante: number = 0;
    private alasCola: number = 0;

    public constructor (nad:number,nac:number){
        this.alasDelante = nad;
        this.alasCola = nac;
    }
    
    public toString (){
        return this.alasDelante + " alas delanteras y " + this.alasCola + " alas de cola."
    }
}

class TrenAterr {
    private fijo: boolean = false;
    private numNeumaticos: number = 0;
    private numAmort: number = 0;
    public constructor (f:boolean, neu: number, am: number){
        this.fijo = f;
        this.numAmort = am;
        this.numNeumaticos = neu;
    }

    public toString(){
        if (this.fijo) {
            return "Posee un tren de Aterrizaje Fijo, con " + this.numNeumaticos +" neumaticos y " + this.numAmort + " amortiguadores.";
       } 
        return "Posee un tren de Aterrizaje con " + this.numNeumaticos +" neumaticos y " + this.numAmort + " amortiguadores.";
    } 
}

class Cubierta {
    private cabina: boolean = false;
    private numTanques: number = 0;
    private salidaEm: boolean = false;
    public constructor (cab:boolean, tan:number, se:boolean){
        this.cabina=cab;
        this.numTanques=tan;
        this.salidaEm=se;
    }
    public toString(){
        if (this.salidaEm === false && this.cabina) {
            return "no cuenta con salida de emergencia, si con cabina y con " + this.numTanques + " tanque/s de combustible";
        } if (this.salidaEm && this.cabina) {
            return "Cuenta con salida de emergencia y cabina, tambien " + this.numTanques + " tanque/s de combustible";
        } if (this.cabina === false && this.salidaEm === false) {
            return "no posee cabina ni salida de emergencias. tiene " + this.numTanques + " tanque/s de combustible";
        } return "posee salida de emergencia pero no cabina, tanque de combustible tiene " + this.numTanques + ".";
    }
}

class Aeroplano {
    private turbina: Turbina;
    private helice: Helice;
    private alas: Alas;
    private tren: TrenAterr;
    private cubierta: Cubierta;
    public constructor (t:Turbina, h: Helice, a: Alas, tr: TrenAterr, c: Cubierta){
        this.turbina = t;
        this.helice = h;
        this. alas = a,
        this.tren = tr;
        this.cubierta = c;
    }

    public toString (){
        let mensaje = "Aeroplano compuesto por: "
        mensaje+= this.turbina.toString();
        mensaje+= " " + this.helice.tuString();
        mensaje+= " " + this.alas.toString();
        mensaje+= " " + this.tren.toString();
        mensaje+= " Finalmente, la cubuierta " + this.cubierta.toString();
        return mensaje;
    }

}

let nuevaTurbina = new Turbina(2);
let nuevaHelice = new Helice(3);
let nuevasAlas = new Alas(2,3);
let nuevoTren = new TrenAterr(true, 6, 4);
let nuevaCubierta = new Cubierta(true, 2, true);

let aero712 = new Aeroplano(nuevaTurbina, nuevaHelice, nuevasAlas, nuevoTren, nuevaCubierta);

console.log(aero712.toString())

