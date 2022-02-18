const {test}=QUnit;
const jatek = new Jatek();
let kivalasztottKartya =[];
QUnit.module('KepekTombFeltolt tesztjei.', function(h) {
    test('Létezik?', (assert)=> {
        assert.ok(jatek.kepekTombFeltoltese,"Létezik a függvény");
    });
    test('függvény??', (assert)=> {
        assert.ok(typeof jatek.kepekTombFeltoltese==="function","funkció");
    });
    test('Véletlenszerűen rendezett?', (assert)=> {
        assert.equal(jatek.kepekTombFeltoltese(kepekTomb, "Math.random()"));
    });
});
QUnit.module('Kartya kattintas és block tesztelés', function(h) {
    test('állapot változás.', (assert)=> {
        assert.equal(jatek.TriggerBlocked(kivalasztottKartya[addEventListener],"kartyaKattintas"));
    });
    test('Blokkolt elem változás:', (assert)=> {
        assert.equal(jatek.TriggerBlocked(false));
    });
    test('Bekerül a tömbbe az elem', (assert)=> {
        assert.equal(jatek.kepekTombFeltoltese(kartyaTomb[0],0));
    });
    test('Leblokkolnám.', (assert)=> {
        assert.equal(jatek.TriggerBlocked(kartyaTomb[1],"gameBlocked"));
    });
    test('Nem Blokkolnám.', (assert)=> {
        assert.equal(jatek.TriggerBlocked(kartyaTomb[0],"gameUnblocked"));
    });
    
});  
