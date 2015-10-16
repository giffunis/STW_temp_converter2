"use stric";

function Medida(){
  // Declaración de variables
  this.valor;
  this.tipo;

  // Funciones de la clase Medida
  this.getValor = function(){return this.valor;}
  this.getTipo = function(){return this.tipo;}
  this.setValor = function(valor){this.valor = valor;}
  this.setTipo = function(tipo){this.tipo = tipo;}
  this.set = function(cadena){
    var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
    var aux = cadena.match(regexp);
    this.valor = aux[1];
    this.tipo = aux[2];
  }
}

function Temperatura(){
  Medida.call(this)
}

Temperatura.prototype.convert = function(){
  if(this.tipo === 'C' || this.tipo ==='c'){
    var aux = this.valor * (9/5) + 32;
    return (aux + 'F');
  }else{
    var aux = (this.valor - 32) * (5/9);
    return (aux + 'C');
  }
}


function convertir(){
  temp = new Temperatura();
  temp.set(entrada.value);
  salida.innerHTML = temp.convert();
}
