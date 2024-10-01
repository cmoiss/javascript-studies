const produto1 = {}

produto1.nome = "Samsung";
produto1.preco = "R$1000";
produto1["Desconto legal"] = 0.4;

console.log(produto1);

produto2 = {
    nome: "Camisa",
    preco: "R$200",
    obj: {
        bla: "Sim"
    }
}

produto1["Desconto legal"] = 0.5;
