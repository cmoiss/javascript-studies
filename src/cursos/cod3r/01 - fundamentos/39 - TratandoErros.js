function tratarErroELançar(erro) {
    // throw new Error("...");
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(object) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!!!");
    } catch (e) {
        tratarErroELançar();
    } finally {
        console.log("Final");
    }
}

const obj = { nome: "Roberto" }
imprimirNomeGritado()