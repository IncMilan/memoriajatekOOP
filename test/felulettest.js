const {test}=QUnit;
const kartya = new Kartya();

QUnit.module('Kartya allapot valtozas', function(h) {
    let tesztadatelem = $("#qunit-fixture"); 
    test('Létezik?', (assert)=> {
        assert.equal(kartya.kattintas(allapotValtozas()));
    });
}); 