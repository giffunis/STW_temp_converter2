"use stric";

function Medida(valor, tipo){
  // Declaración de variables
  this.valor = valor;
  this.tipo = tipo;
  this.todo = valor + tipo;

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
  this.todo = this.valor + this.tipo;
}

// De grados farenheit a centígrados
Temperatura.prototype.f_to_c = function(){
  this.valor = (this.valor - 32) * (5/9);
  this.tipo = "C";
  this.todo = this.valor + this.tipo;
}
