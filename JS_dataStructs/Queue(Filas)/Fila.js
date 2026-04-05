class Fila {
    constructor(){
        this.itens = {};
        this.ultimo = 0;
        this.primeiro = 0;
    }

    Enfileira(elem){// T(1)
        this.itens[this.ultimo] = elem;
        this.ultimo++;
    }
    
    Desenfileira(){// T(1)
        if (this.N>0){
            const item = this.itens[this.primeiro];
            delete this.itens[this.primeiro];
            this.primeiro++;
            return item;
        }
        return NaN;
    }

    Tamanho(){// T(1)
        return this.ultimo-this.primeiro;
    }
    

    Inicio(){//T(1)
        return this.itens[this.primeiro];
    }

    Fim(){//T(1)
        return this.itens[this.ultimo-1];
    }

    print(){//T(N)
        console.log(this.itens);
    }
}
module.exports = Fila;

/*
filinha = new Fila;

filinha.Enfileira(10);
filinha.Enfileira(21);
filinha.Enfileira(112);

filinha.print();

filinha.Desenfileira();

console.log(filinha.Tamanho());
console.log(filinha.Inicio());
console.log(filinha.Fim());
*/