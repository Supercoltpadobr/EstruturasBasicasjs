

class Pilha {
    constructor(){
        this.vetor = [];
        this.N = 0;
    }
    
    Tamanho(){//T(1)
        return this.N;
    }

    Topo(){//T(1)
        return this.vetor[this.N-1];
    }

    Desempilha(){//T(1)
        if (this.N>0){
            this.N--;
            return this.vetor.pop();
        }
        return NaN;
    }

    Empilha(elem){// T(1) médio (pior caso (N))
        this.vetor.push(elem);
        this.N++;
    }

    show(){// T(N)
        for (const elem of this.vetor) {
            console.log(elem);
        }
    }
}


const pilha = new Pilha;
    

for(var i=0; i<100; i++){

    pilha.Empilha(i*i);

}

while(pilha.Desempilha()!=121){
    console.log(pilha.Topo());
}
pilha.show();
console.log(pilha.Tamanho());
