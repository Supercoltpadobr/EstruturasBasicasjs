
class TabelaDeAcessoDireto{
    constructor(Tam){
        this.vetor = new Array(Tam);
        this.N = 0;
    }

    EstaVazia(){
        return this.N === 0;
    }

    Busca(elem){
        if(this.vetor[elem] === true){
            return true;
        }
        return false;
    }

    Remove(elem){
        this.N--;
        this.vetor[elem] = undefined;
    }

    Insere(elem){
        this.N++;
        this.vetor[elem] = true;
    }
}

