/*const matrizGrafo = [
//   A  B  C  onde o elemento 1 representa o caminho da linha i para a coluna j
    [0, 1, 0],//A
    [1, 0, 1],//B
    [0, 1, 0] //C
];

const listaDeAdjacentes = {
    'A' : ['B'], // onde cada elemento tem seus nós adjacentes
    'B' : ['A', 'C'],
    'C' : ['B']
}

console.log(listaDeAdjacentes['B']);*/

class Grafo {
    constructor(){
        this.listaDeAdjacentes = {};
    }

    AdicionarVertice(vertice){
        if(!this.listaDeAdjacentes[vertice]){
            this.listaDeAdjacentes[vertice] = new Set();
        }
    }

    AdicionarAresta(v1, v2){
        if(!this.listaDeAdjacentes[v1]){
            this.AdicionarVertice(v1);
        }

        if(!this.listaDeAdjacentes[v2]){
            this.AdicionarVertice(v2);
        }
        
        this.listaDeAdjacentes[v1].add(v2);
        this.listaDeAdjacentes[v2].add(v1);
    }

    print(){
        for(let vertice in this.listaDeAdjacentes){
            console.log(vertice + " -> " + [...this.listaDeAdjacentes[vertice]]);
        }
    }

    ArestaExiste(v1, v2){
        return (this.listaDeAdjacentes[v1].has(v2)  && this.listaDeAdjacentes[v2].has(v1));
    }

    RemoverAresta(v1, v2){
        if (this.ArestaExiste(v1, v2)){
            this.listaDeAdjacentes[v1].delete(v2);
            this.listaDeAdjacentes[v2].delete(v1);
        }
    }

    RemoverVertice(v1){
        if(!this.listaDeAdjacentes[v1]){
            return;
        }
        for(const verticeAdjacente of this.listaDeAdjacentes[v1]){
            this.RemoverAresta(v1, verticeAdjacente);
        }
        delete this.listaDeAdjacentes[v1];
    }

}

const grafinho = new Grafo;

grafinho.AdicionarVertice("A");
grafinho.AdicionarVertice("B");
grafinho.AdicionarVertice("C");

grafinho.AdicionarAresta("A", "B");
grafinho.AdicionarAresta("B", "C");


grafinho.print();

console.log(grafinho.ArestaExiste("A", "C"));
console.log(grafinho.ArestaExiste("A", "B"));

grafinho.RemoverVertice("B");
grafinho.print();