var expect = chai.expect;

describe("Pruebas BDD", function() {
  var temp = new Temperatura(0,0);
  var temp2 = new Temperatura(0,0);
 var aux = document.getElementById("salida");

  describe("Probando los sets", function() {
    it("Debe valer el tipo F", function() {
      temp.set_tipo("F");
      expect(temp.tipo).to.equal("F");
    });

    it("Debe valer el valor 20", function() {
      temp.set_valor(20);
      expect(temp.valor).to.equal(20);
    });
  });

  describe("conversiones", function() {
    it("3.2e1f = 0.0C", function() {
      temp2.set_valor(3.2e1);
      temp2.set_tipo("f");
      var salida = temp2.f_to_c();
      expect(salida).to.equal("0.0C");
    });

    it("0.0C = 32.0F", function() {
      var salida = temp2.c_to_f();
      expect(salida).to.equal("32.0F");
    });
  });
  
  describe("gets", function() {
    it("get_valor", function() {
      var temp3 = new Temperatura(0,0);
      temp3.set_valor(30);
      var salida = temp3.get_valor();
      expect(salida).to.equal(30);
    });

    it("get_tipo", function() {
      var temp3 = new Temperatura(0,0);
      temp3.set_tipo('c');
      var salida = temp3.get_tipo();
      expect(salida).to.equal("c");
    });
  });

  describe("convertir()", function() {
    it("get_valor", function() {
      entrada.value = "32F";
      converter();
      expect(salida.innerHTML).to.equal("0.0C");
    });
  }); 

});
