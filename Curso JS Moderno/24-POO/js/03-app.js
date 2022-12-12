// class declarations
class Cliente {
    //Pasar parametros
  constructor(nombre,saldo){
      //Recuerda declarar los parametros () y despues  argumentos 'this'
      this.nombre = nombre
      this.saldo = saldo;
  }
  //Metodos (Que literal son funciones)
  mostrarInformacion(){
      //this, siempre hace referencia al objeto actual
      return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
  //Los metodos estaticos no requieren de una instancia
  static bienvenida(){ 
      return `Bienvenido al cajero`;
  }
};

//Herencia
//Clase hijo de cliente
class Empresa extends Cliente{
        
    constructor(nombre,saldo,telefono,categoria){
        //Must call super
        //super(); se encarga de llamar a los argumentos this de la clase padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    mostrarInformacion2(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}, telefono ${this.telefono}, Categoria ${this.categoria}`
    }

    static bienvenida(){  //reescribir un metodo
        return `Bienvenido al cajero`;
    }
  

};

const adrian = new Cliente('Adrian', 4000);
const empresa = new Empresa('BIMBO',10000, 3310615210,'Comida');
console.log(empresa);
console.log(empresa.mostrarInformacion2());


