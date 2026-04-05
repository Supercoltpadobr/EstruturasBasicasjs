class elem{
    constructor(chave, valor){
        this.chave = chave;
        this.valor = valor;
        this.Prox = null;
    }
}

class LisEnc{
    constructor(){
        this.Cabeca = null;
        this.N = 0;
    }

    EstaVazia(){
        return this.N === 0;
    }

    InsereIni(chave, valor){
        const novoNo = new elem(chave, valor);
        novoNo.Prox = this.Cabeca;
        this.Cabeca = novoNo;
        this.N++;
    }

    remover(chave){
        if (this.EstaVazia()){
            return;
        }
        let atual = this.Cabeca;
        if (this.Cabeca.chave === chave){
            this.Cabeca = atual.Prox;
            this.N--;
            return atual.valor;
        }
        
        let anterior = atual
        while(atual.chave != chave){
            anterior = atual;
            atual = atual.Prox;
            if(atual==null){
                return;
            }
        }
        anterior.Prox = atual.Prox;
        this.N--;
        return atual.valor;
    }

    buscaChave(chave){
        let atual = this.Cabeca;
        while(atual){
            if (atual.chave == chave){
                return atual;
            }
            atual = atual.Prox;
        }
        return null;
    }

    print(v){// T(N)
        
        let atual = this.Cabeca;
        let listaValores = `[${v}]`;
        while(atual){
            listaValores += ` -> ${atual.chave} : ${atual.valor}`;
            atual = atual.Prox;
        }
        console.log(listaValores);
    }    
}

class TabelaDeDispersao{
    constructor(tamanho){
        this.tabela = new Array(tamanho);
        this.N = tamanho;
    }

    f(chave){
        let T = 0;
        for(var i=0; i<chave.length; i++){
            T += chave.charCodeAt(i);
        }
        return T % this.N;
    }

    atribuir(chave, valor){
        const p = this.f(chave);
        if (this.tabela[p]){
            let esta = this.tabela[p].buscaChave(chave);
            if (esta){
                esta.valor = valor;
            }else{
               this.tabela[p].InsereIni(chave, valor); 
            }
        }else{
            const colisoes = new LisEnc;
            colisoes.InsereIni(chave, valor);
            this.tabela[p] = colisoes;
        }
    }

    acessar(chave){
        const LE = this.tabela[this.f(chave)];
        if (LE){
            const elem = LE.buscaChave(chave);
            if(elem){
                return elem.valor;
            }
        }
        return null;
    }

    remover(chave){
        const LE = this.tabela[this.f(chave)];
        if(LE){
            LE.remover(chave);
        }
    }

    mostrar(){
        for(var i=0; i<this.N; i++){
            if(this.tabela[i]){
                this.tabela[i].print(i);
            }
        }
    }
}


const tabela = new TabelaDeDispersao(50);


tabela.atribuir("EuSou", "sim");
tabela.atribuir("SouEu", "não");

tabela.atribuir("banana", "B");
tabela.atribuir("naba", "N");
tabela.atribuir("gas", "2");
tabela.atribuir("nig", "ga");
tabela.atribuir("nabana", "B");

console.log(tabela.acessar("nig"));
console.log(tabela.acessar("EuSou"));
console.log(tabela.acessar("SouEu"));

tabela.remover("nabana");
tabela.remover("EuSou");

tabela.mostrar();