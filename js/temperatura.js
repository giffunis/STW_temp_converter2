"use stric";

function Medida(valor, tipo){
  // Declaración de variables
  this.valor = valor;
  this.tipo = tipo;

  // Funciones de la clase Medida
  this.get_valor = function(){return this.valor;}
  this.get_tipo = function(){return this.tipo;}
  this.set_valor = function(valor){this.valor = valor;}
  this.set_tipo = function(tipo){this.tipo = tipo;}
}

function Temperatura(){}

Temperatura.prototype = new Medida() // Definimos la clase Temperatura como una clase hija de Medida

// De grados centígrados a farenheit
Temperatura.prototype.c_to_f = function(){
  this.valor = this.valor * (9/5) + 32;
  this.tipo = "F";
  var salida = this.valor.toFixed(1) + this.tipo;
  return salida;
}

// De grados farenheit a centígrados
Temperatura.prototype.f_to_c = function(){
  this.valor = (this.valor - 32) * (5/9);
  this.tipo = "C";
  var salida = this.valor.toFixed(1) + this.tipo;
  return salida;
}

function convertir(){
  var var_in = entrada.value;
  var var_out;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;

  var aux = var_in.match(regexp);

  temp = new Temperatura(0,'x');
  temp.set_tipo(aux[2]);
  temp.set_valor(aux[1]);

  if(temp !== undefined){  //  si existe temp

   if(temp.get_tipo() == 'C' || temp.get_tipo() == 'c'){
     var_out = temp.c_to_f();
   }
   else{
     var_out = temp.f_to_c();
   }
   salida.innerHTML = var_out;
 }
 else{ //  Si no existe aux
   salida.innerHTML = "ERROR! Try something like '-4.2C' instead";
 } //  Si no existe aux
}
