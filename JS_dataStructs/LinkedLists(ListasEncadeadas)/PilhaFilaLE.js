const ListaEncadeadaComCauda = require("./LE-ComCauda");



class PilhaLE{
    constructor(){
        this.Lista = new ListaEncadeadaComCauda;
        this.Topo = null;
        this.N = 0;
    }

    EstaVazia(){
        return this.N === 0;
    }

    Tamanho(){
        return this.N;
    }

    Print(){
        this.Lista.print();
    }

    Empilha(valor){
        this.Lista.InsereIni(valor);
        this.Topo = valor;
        this.N++;
    }

    Desempilha(){
        this.Topo = this.Lista.Cabeca.Prox.valor;
        this.N--;
        return this.Lista.RemoveIni();
    }
}

class FilaLE{
    constructor(){
        this.Lista = new ListaEncadeadaComCauda;
        this.Primeiro = null;
        this.Ultimo = null;
        this.N = 0;
    }

    EstaVazia(){
        return this.N === 0;
    }

    Tamanho(){
        return this.N;
    }

    Print(){
        this.Lista.print();
    }

    Enfileira(valor){
        if(this.EstaVazia()){
            this.Primeiro = valor;
        }
        this.Ultimo = valor;
        this.Lista.InsereFim(valor);
        this.N++;
        
    }

    Desenfileira(){
        const removido = this.Lista.RemoveIni();
        this.N--;
        if(this.N === 0){
            this.Ultimo = null;
            this.Primeiro = null;
        }else{
            this.Primeiro = this.Lista.Cabeca.valor;
        }
        return removido;
    }
}
module.exports = FilaLE;
/*
const Pilha = new PilhaLE;
console.log(Pilha.EstaVazia());

Pilha.Empilha(12);
Pilha.Empilha(62);
Pilha.Empilha(44);
Pilha.Empilha(52);
console.log(Pilha.Tamanho());
Pilha.Print();

Pilha.Desempilha();
Pilha.Desempilha();

console.log(Pilha.Topo);
Pilha.Print();

const Fila = new FilaLE;
console.log(Fila.EstaVazia());

Fila.Enfileira(12);
Fila.Enfileira(62);
Fila.Enfileira(44);
Fila.Enfileira(52);
console.log(Fila.Tamanho());
Fila.Print();

Fila.Desenfileira();
Fila.Desenfileira();

console.log(Fila.Primeiro);
console.log(Fila.Ultimo);
Fila.Print();*/