var expect = chai.expect;

describe("Pruebas BDD", function() {
  var temp = new Temperatura(0,0);
  var temp2 = new Temperatura(0,0);


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

});
