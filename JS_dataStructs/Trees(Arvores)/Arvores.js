const FilaLE = require("../LinkedLists(ListasEncadeadas)/PilhaFilaLE.js");

class NoBinario{
    constructor(elem){
        this.valor = elem;
        this.esq = null;//menor ou igual
        this.dir = null;//maior
    }
}

class ArvoreDeBusca{
    constructor(){
        this.Raiz = null;
        this.N = 0;
    }

    EstaVazia(){// T(1)
        return this.N === 0;
    }

    Insere(elem){// caso médio : O(log(N))
        if(this.EstaVazia()){
            this.Raiz = new NoBinario(elem);
        }else{
            let atual = this.Raiz;
            let anterior = null;
            while(atual!=null){
                anterior = atual;
                if(elem>atual.valor){
                    atual = atual.dir;
                }else{
                    atual = atual.esq;
                }
            }
            if(elem>anterior.valor){
                anterior.dir = new NoBinario(elem);
            }else{
                anterior.esq = new NoBinario(elem);
            }
            
        }
        this.N++;
    }

    Busca(elem){// caso médio : O(log(N))
        let atual = this.Raiz;
        while(atual){
            if(atual.valor == elem){
                return true;
            }
            if (atual.valor > elem){
                atual = atual.esq;
            }else{
                atual = atual.dir;
            }
        }
        return false;
    }

    maiorElem(No=this.Raiz){// caso médio : O(log(N))
        let atual = No;
        if(!No){
            return null;
        }
        while(atual.dir){
            atual = atual.dir;
        }
        return atual.valor;
    }

    menorElem(No=this.Raiz){// caso médio : O(log(N))
        let atual = No;
        if(!No){
            return null;
        }
        while(atual.esq){
            atual = atual.esq;
        }
        return atual.valor;
    }

    Remover(elem, No=this.Raiz, anterior=this.Raiz, esq=false){// caso médio : O(log(N))
        let atual = No;
        while(atual){
            if(atual.valor == elem){
                if(atual.dir == null  &&  atual.esq == null){
                    if(esq){
                        anterior.esq = null;
                    }else{
                        anterior.dir = null;
                    }
                }
                if(atual.dir == null){
                    atual.valor = this.maiorElem(atual.esq);
                    this.Remover(atual.valor, atual.esq, atual, true);
                }else{
                    atual.valor = this.menorElem(atual.dir);
                    this.Remover(atual.valor, atual.dir, atual, false);
                }
                this.N--;
            }
            anterior = atual;
            if (atual.valor > elem){
                atual = atual.esq;
                esq = true;
            }else{
                atual = atual.dir;
                esq = false;
            }
        }
    }

    print1(){//enviado antes T(N)
        this.print1R(this.Raiz);
    }
    print1R(No){
        if(No){
            console.log(No.valor);
            this.print1R(No.esq);
            this.print1R(No.dir);
        }
    }

    print2(){//enviado orndenado T(N)
        this.print2R(this.Raiz);
    }
    print2R(No){
        if(No){
            this.print2R(No.esq);
            console.log(No.valor);
            this.print2R(No.dir);
        }
    }

    print3(){//enviado após T(N)
        this.print3R(this.Raiz);
    }
    print3R(No){
        if(No){
            this.print3R(No.esq);
            this.print3R(No.dir);
            console.log(No.valor);
        }
    }

    print(){// T(N), complexidade de espaço: T(n. de elem. na última camada)
        const fila = new FilaLE;
        let atual;
        fila.Enfileira(this.Raiz);
        let qCamada = 1;
        let nCamada = 0;
        let Camada = "";
        while(fila.Tamanho()>0){
            atual = fila.Desenfileira();
            qCamada--;
            Camada += atual.valor.toString() + " ";
            
            if(atual.esq){
                fila.Enfileira(atual.esq);
                nCamada++;
            }
            if(atual.dir){
                fila.Enfileira(atual.dir);
                nCamada++;
            }
            if(qCamada === 0){
                console.log(Camada);
                qCamada = nCamada;
                nCamada = 0;
                Camada = "";
            }
        }
    }

}

const Arvore = new ArvoreDeBusca;

Arvore.Insere(23);
Arvore.Insere(32);
Arvore.Insere(1);
Arvore.Insere(0);
Arvore.Insere(3);
Arvore.Insere(39);
Arvore.Insere(31);

console.log(Arvore.Busca(32));
console.log(Arvore.Busca(223));

Arvore.Remover(1);

Arvore.print();