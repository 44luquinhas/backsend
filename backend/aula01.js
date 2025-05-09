class produto{
    constructor(nome,preco,quantidade){
        this.nome = nome; 
        this.preco = preco;
        this.quantidade = quantidade;
    }
    mostrarDados(){
        console.log(`Produto ${this.nome}, preco R$ ${this.preco}, quantidade: ${this.quantidade}`);

    }
    vender(qtd){
        if(qtd <= this.quantidade){
            this.quantidade -= qtd;
            console.log(`Venda realizada, Quantidade atual ${this.quantidade}`)
        } else{ 
            console.log("Estoque insuficiente para venda");

        }

    }
    repor(qnt){
        this.quantidade += qtd;
        console.log(`Reposição feita. quantidade atual: ${this.quantidade}`);

    }
}

let p1 = new produto("pão de queijo",2.5,100);
p1.mostrarDados();
p1.vender(2);
//produto.repor(10);