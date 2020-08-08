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


function pageLanding(req, res) {
    return res.render("index.html")
}
// Parado o video 1:15.
function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
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