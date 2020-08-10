const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "André Luiz",
        avatar: "https://avatars0.githubusercontent.com/u/61711374?s=460&u=2fb4c2c6c984642120623f69d78d02192ee55bbd&v=4",
        whatsapp: "73999104889",
        bio: "Instrutor de inglês"
    }

    classValue = {
        subject: 1,
        cost: "35"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 720,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //Consultar dados de todos os Proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // Consultar as classes de um determinado Proffy
    const selecClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classess ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)

    // Consultar os horarios de disponibilidade dos Proffys
    const selectClassesSchedules = await db.all(`
    SELECT classes_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "420" 
    `)
})
