class FilaCir{
    constructor(capacidade){
        this.itens = new Array(capacidade);
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.N=0;
    }

    Enfileira(elem){
        if (this.Tamanho() < this.capacidade){
            this.itens[this.fim] = elem;
            this.fim = (this.fim+1)%this.capacidade;
            this.N++;
        }
    }

    Desenfileira(){
        if (this.Tamanho() > 0){
            const retirado = this.itens[this.inicio];
            this.inicio = (this.inicio+1) % this.capacidade;
            this.N--;
            return retirado;
        }
    }

    Tamanho(){
        return this.N;
    }

    EstaCheia(){
        return this.Tamanho() === this.capacidade;
    }

    EstaVazia(){
        return this.Tamanho() === 0;
    }

    Inicio(){
        return this.itens[this.inicio];
    }

    Fim(){
        return this.itens[(this.inicio+this.N-1) % this.capacidade];
    }

    print(){
        for (var i=0; i<this.N; i++){
            console.log(this.itens[(i+this.inicio)%this.capacidade]);
        }
    }    

}



filinha = new FilaCir(3);

filinha.Enfileira(10);
filinha.Enfileira(21);
filinha.Enfileira(112);

filinha.print();

filinha.Desenfileira();

console.log(filinha.Tamanho());
console.log(filinha.Inicio());
console.log(filinha.Fim());

