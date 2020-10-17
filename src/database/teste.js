const Database = require ('./db');

Database.then(function(db){
    //inserir dados na tabela
        db.run(`
            INSERT INTO orphanages (
                lat,
                lng,
                name,
                whatsapp,
                images,
                instructions,
                opening_hours,
                open_on_wekeends
            ) VALUES (
                "-17.5420368"
                "-39.7463134"
                "Lar das meninas"
            );
        `)

    //consultar dados da tabela
})