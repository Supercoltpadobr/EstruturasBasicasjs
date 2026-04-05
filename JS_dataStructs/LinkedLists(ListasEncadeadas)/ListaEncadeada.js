class No{
    constructor(valor){
        this.valor = valor;
        this.Prox = null;
        this.N = 0;
    }
}

class ListaEncadeada{
    constructor(){
        this.Cabeca = null;
        this.N = 0;
    }

    Estavazia(){ // T{1}
        return this.N === 0;
    }

    Tamanho(){ // T{1}
        return this.N;
    }

    InsereIni(valor){// T{1}
        const novoNO = new No(valor);
        if(!this.Estavazia()){
            novoNO.Prox = this.Cabeca;
        }
        this.Cabeca = novoNO;
        this.N++;
    }

    InsereFim(valor){// T{N}
        const novoNO = new No(valor);
        if(this.Estavazia()){
            this.Cabeca = novoNO;
        }else{
            let atual = this.Cabeca;
            while(atual.Prox){
                atual = atual.Prox;
            }
            atual.Prox = novoNO;
        }
        this.N++;
    }

    Insere(valor, pos){// O{N}  (média considerando pos aleatória)
        if (pos >= 0 || pos<this.N){
            const novoNO = new No(valor);
            if(pos === 0){
                this.Cabeca = novoNO;
            }else{
                let atual = this.Cabeca;
                for(var i=1; i<pos; i++){
                    atual = atual.Prox
                }
                novoNO.Prox = atual.Prox;
                atual.Prox = novoNO;
            }
            this.N++;
        }
    }

    RemoverInd(indice){// O{N}média (média considerando index aleatório)
        if (indice >= 0  && indice < this.N){
            let removido;
            if (indice === 0){
                removido = this.Cabeca;
                this.Cabeca = removido.Prox;
            }else{
                let atual = this.Cabeca;
                for (var i=1; i<indice; i++){
                    atual = atual.Prox;
                }
                removido = atual.Prox;
                atual.Prox = removido.Prox;
            }
            this.N--;
            return removido.valor;
        }
        return null;
    }

    RemoverVal(valor){// O{N}média (média considerando valor aleatório e lista distribuida aleatóriamente)
        if(this.Estavazia()){
            return null;
        }
        let removido;
        if(this.Cabeca.valor === valor){
            removido = this.Cabeca;
            this.Cabeca = removido.Prox;
            this.N--;
            return 0;
        }else{
            let atual = this.Cabeca;
            var i=1;
            while(i < this.N){
                removido = atual.Prox;
                if(atual.Prox.valor === valor){
                    atual.Prox = removido.Prox;
                    this.N--;
                    return i;
                }
                atual = atual.Prox;
                i++;
            }
            return null;
        }
    }

    Busca(valor){// O{N}média (média considerando valor aleatório e lista distribuida aleatóriamente)
        if(this.Estavazia()){
            return -1;
        }
        let atual = this.Cabeca;
        var i=0;
        while(atual){
            if(atual.valor === valor){
                return i;
            }
            atual = atual.Prox;
            i++;
        }
        return -1;
    }

    Inverter(){ // T{N}
        if(this.Estavazia()){
            return;
        }
        let Anterior = null;
        let atual = this.Cabeca;
        let prox = atual.Prox;

        while(prox){
            atual.Prox = Anterior;
            Anterior = atual;
            atual = prox;
            prox = atual.Prox;
        }

        atual.Prox = Anterior;
        this.Cabeca = atual;
    }

    print(){// T(N)
        
        let atual = this.Cabeca;
        let listaValores = "Inicio";
        while(atual){
            listaValores += ` -> ${atual.valor}`;
            atual = atual.Prox;
        }
        console.log(listaValores);
    }
}

module.exports = ListaEncadeada;
/*
const Lista = new ListaEncadeada;

console.log(Lista.Estavazia());

console.log(Lista.Tamanho());

Lista.Insere(1, 0);

Lista.Insere(2, 1);

Lista.Insere(4, 2);

Lista.Insere(3, 2);


Lista.print();

console.log(Lista.RemoverVal(2));

Lista.print();

console.log(Lista.Busca(2));

Lista.Inverter();
Lista.Inverter();

Lista.print();*/