const obj = {
    nome : "SAS",
    "idade-teste" : 8,
    sayMyName : function(){
        console.log("Now, say my name... \nIt's Heinzemberg. \nYou're GOD DAMN RIGHT!!");
    }
}
obj.CPF = "112300041";
delete obj.nome;

obj.sayMyName();

