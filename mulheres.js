const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Cintia Felippe',
        imagem: 'https://github.com/cintiayuka',
        minibio: 'Analista de Qualidade de Software'
    },
    {
        nome: 'Adriana Sakurai',
        imagem: 'https://github.com/adrianasakurai',
        minibio: 'Nutricionista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)