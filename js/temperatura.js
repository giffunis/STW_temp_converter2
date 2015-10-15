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
