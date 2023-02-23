"use strict";
class Turbina {
    constructor(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    toString() {
        return this.numTurbinas + " turbina/s,";
    }
}
class Helice {
    constructor(n) {
        this.numHelices = 0;
        this.numHelices = n;
    }
    tuString() {
        return this.numHelices + " Helice/s,";
    }
}
class Alas {
    constructor(nad, nac) {
        this.alasDelante = 0;
        this.alasCola = 0;
        this.alasDelante = nad;
        this.alasCola = nac;
    }
    toString() {
        return this.alasDelante + " alas delanteras y " + this.alasCola + " alas de cola.";
    }
}
class TrenAterr {
    constructor(f, neu, am) {
        this.fijo = false;
        this.numNeumaticos = 0;
        this.numAmort = 0;
        this.fijo = f;
        this.numAmort = am;
        this.numNeumaticos = neu;
    }
    toString() {
        if (this.fijo) {
            return "Posee un tren de Aterrizaje Fijo, con " + this.numNeumaticos + " neumaticos y " + this.numAmort + " amortiguadores.";
        }
        return "Posee un tren de Aterrizaje con " + this.numNeumaticos + " neumaticos y " + this.numAmort + " amortiguadores.";
    }
}
class Cubierta {
    constructor(cab, tan, se) {
        this.cabina = false;
        this.numTanques = 0;
        this.salidaEm = false;
        this.cabina = cab;
        this.numTanques = tan;
        this.salidaEm = se;
    }
    toString() {
        if (this.salidaEm === false && this.cabina) {
            return "no cuenta con salida de emergencia, si con cabina y con " + this.numTanques + " tanque/s de combustible";
        }
        if (this.salidaEm && this.cabina) {
            return "Cuenta con salida de emergencia y cabina, tambien " + this.numTanques + " tanque/s de combustible";
        }
        if (this.cabina === false && this.salidaEm === false) {
            return "no posee cabina ni salida de emergencias. tiene " + this.numTanques + " tanque/s de combustible";
        }
        return "posee salida de emergencia pero no cabina, tanque de combustible tiene " + this.numTanques + ".";
    }
}
class Aeroplano {
    constructor(t, h, a, tr, c) {
        this.turbina = t;
        this.helice = h;
        this.alas = a,
            this.tren = tr;
        this.cubierta = c;
    }
    toString() {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.turbina.toString();
        mensaje += " " + this.helice.tuString();
        mensaje += " " + this.alas.toString();
        mensaje += " " + this.tren.toString();
        mensaje += " Finalmente, la cubuierta " + this.cubierta.toString();
        return mensaje;
    }
}
let nuevaTurbina = new Turbina(2);
let nuevaHelice = new Helice(3);
let nuevasAlas = new Alas(2, 3);
let nuevoTren = new TrenAterr(true, 6, 4);
let nuevaCubierta = new Cubierta(true, 2, true);
let aero712 = new Aeroplano(nuevaTurbina, nuevaHelice, nuevasAlas, nuevoTren, nuevaCubierta);
console.log(aero712.toString());
