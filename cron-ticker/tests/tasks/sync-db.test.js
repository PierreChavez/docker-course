const syncDB = require("../../tasks/sync-db")


describe ('Pruebas  en syncDB', () => {

    test('debe ejecutar el proceso 2 veces', () => { 

        syncDB();
        const times = syncDB();
        console.log('times:', times);

        expect(times).toBe(2);
     })
})