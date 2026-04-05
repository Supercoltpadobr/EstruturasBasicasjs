
class No{
    constructor(valor){
        this.valor = valor;
        this.Prox = null;
        this.N = 0;
    }
}


class ListaEncadeadaComCauda{
    constructor(){
        this.Cabeca = null;
        this.Cauda = null;
        this.N = 0;
        
    }

    Estavazia(){ // T{1}
        return this.N === 0;
    }

    Tamanho(){ // T{1}
        return this.N;
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

    InsereIni(valor){// T{1}
        const novoNo = new No(valor);
        if(this.Estavazia()){
            this.Cauda = novoNo;
        }else{
            novoNo.Prox = this.Cabeca;
        }
        this.Cabeca = novoNo;
        this.N++;
    }

    InsereFim(valor){// T{1}
        const novoNo = new No(valor);
        if(this.Estavazia()){
            this.Cabeca = novoNo;
        }else{
            this.Cauda.Prox = novoNo;
        }
        this.Cauda = novoNo;
        this.N++;
    }

    RemoveIni(){ // T{1}
        if(this.Estavazia()){
            return null;
        }
        let val = this.Cabeca.valor;
        if (this.N === 1){
            this.Cabeca = null;
            this.Cauda = null;
            this.N--;
        }else{
            this.Cabeca = this.Cabeca.Prox
            this.N--;
        }
        return val;
    }

    RemoveFim(){ // T{N}
        if(this.Estavazia()){
            return null;
        }

        let val = this.Cauda.valor;
        if (this.N === 1){
            this.Cabeca = null;
            this.Cauda = null;
        }else{
            let atual = this.Cabeca;
            while(atual.Prox != this.Cauda){
                atual = atual.Prox;
            }
            this.Cauda = atual;
            this.Cauda.Prox = null;
        }
        this.N--;
        return val;
    }

}
module.exports = ListaEncadeadaComCauda;
//let Lista = new ListaEncadeadaComCauda;

//Lista.InsereIni(0);
//Lista.InsereFim(1);
//Lista.InsereFim(2);
//Lista.InsereFim(3);
//Lista.InsereFim(4);


//Lista.print();

//Lista.RemoveFim();
//Lista.print();
//Lista.RemoveIni();
//Lista.print();
//Lista.RemoveFim();
//Lista.print();
//Lista.RemoveIni();
//Lista.print();
//Lista.RemoveFim();

//Lista.print();