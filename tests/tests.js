var expect = chai.expect;

describe(Pruebas BDD, function() {
  var temp = new Temperatura(0,"F");
  var temp2 = new Temperatura(3.2e1,"f")
  describe("constructor", function() {
    it("Debe valer el tipo F", function() {
      expect(temp.tipo).to.equal("F");
    });

    it("Debe valer el valor 20", function() {
      expect(temp.valor).to.equal(20);
    });
  });

  describe("sets", function() {
    it("Debería cambiar el valor a 30", function() {
      temp.set_valor(30);
      expect(temp.get_valor()).to.equal(20);
    });

    it("El tipo debería ser distinto de F", function() {
      temp.set_tipo("C");
      expect(temp.get_tipo()).not.to.equal("F");
    });
  });

  describe("conversiones", function() {
    it("3,2e1f = 0.0C", function() {
      var salida = temp2.f_to_c();
      expect(salida).to.equal("0.0C");
    });

    it("El tipo debería ser distinto de F", function() {
      var salida = temp2.c_to_f();
      expect(salida).to.equal("32.0F");
    });
  });
});
