const proffys = [
    {
        name: "André Luiz",
        avatar: "/images/perfil.jpg",
        whatsapp: "73998221323",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através das experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Inglês",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Desenvolvimento WEB",
    "Educação Física",
    "Filosofia",
    "Física",
    "Geografia",
    "História",
    "Inglês",
    "Matemática",
    "Portugês",
    "Sociologia",
    "Redação",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}


function pageLanding(req, res) {
    return res.render("index.html")
}
// Parado o video 1:15.
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server.use(express.static("public"))
    .get("/", pageLanding)

    .get("/study", pageStudy)

    .get("/give-classes", pageGiveClasses)

    .listen(process.env.PORT || 5500)