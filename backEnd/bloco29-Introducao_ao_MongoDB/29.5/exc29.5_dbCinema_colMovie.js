/* Para os exercícios você utilizará um dataset pequeno com alguns filmes.
Para isso, conecte-se à sua instância e utilize o trecho de código para criar o banco de dados
e inserir os documentos, (o banco de dados está na pasta do dia, e também pode ser encontrado no course) */

// Para cada execução, utilize o método find() para conferir as alterações nos documentos.
db.movies.find();

// Obs: As imagens de referencia de cada exercicio estão na pasta enunciado

/* 🚀 Exercício 1: Adicione a categoria "superhero" ao filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {$addToSet: {category: "suṕerhero"} }
);

// ou

db.movies.updateOne(
  { title: "Batman" },
  {push: { category: "superhero" } },
);

/* Exercício 2: Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {
        $push: { 
            category: {
                 $each:["villain", "comic-based" ]
            }
        }
    }
);

/* 🚀 Exercício 3: Remova a categoria "action" do filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {
        $pull: {category: "action"}
    }
);

/* 🚀 Exercício 4: Remova o primeiro elemento do array category do filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem */
db.movies.updateOne(
    {title: "Batman"},
    {
        $pop:{ category: -1},
    },
);

/* 🚀 Exercício 5: Remova o último elemento do array category do filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {$pop: {category: 1} }
);

/* 🚀 Exercício 6: Adicione o elemento "action" ao array category do filme Batman,
garantindo que esse valor não se duplique.
Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {$addToSet: {category: "action"}}
);

/* Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone.
Após a execução do método .find().pretty(),
o resultado do filme Batman e do filme Home Alone será parecido com o da imagem: */
db.movies.updateMany(
    { 
        $or: [ 
            {title: "Batman"}, 
            {title: "Home Alone"} 
        ]
    },
    {$push: {category: "90's"} },
);

// ou 

db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's" }},
);

/* Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:

{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}

Após a execução do método .find().pretty(), o resultado do filme Home Alone será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Home Alone"},
    {$addToSet: {
        cast: {
            $each: [
                {
                "actor": "Macaulay Culkin",
                "character": "Kevin"
                },
                {
                  "actor": "Joe Pesci",
                  "character": "Harry"
                },
                {
                  "actor": "Daniel Stern"
                }    
            ]
        }
    },
});
// no lugar do $addToSet pode ser usado o $push também

/* 🚀 Exercício 9: Adicione o campo character com o valor Marv ao array de cast 
em que o campo actor seja igual a Daniel Stern no filme Home Alone.
Link para ler sobre o operador $: https://www.mongodb.com/docs/manual/reference/operator/update/positional/ */
db.movies.updateOne(
    {title: "Home Alone", "cast.actor": "Daniel Stern"},
    {$set: {"cast.$.character": "Marv"}}
);

/*🚀 Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:

{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}

Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o da imagem: */
db.movies.updateOne(
    {title: "Batman"},
    {$addToSet: {
        cast: {
            $each: [
                {
                  "character": "Batman"
                },
                {
                  "character": "Alfred"
                },
                {
                  "character": "Coringa"
                }
            ]
        }
    }
});
// no lugar do $addToSet pode ser usado o $push também

/* Exercício 11: Produza três querys para o filme Batman:

Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman; */
db.movies.updateOne(
   {title: "Batman", "cast.character": "Batman"},
   {$push: {"cast.$.actor": "Christian Bale"} },
);


/*Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred; */
db.movies.updateOne(
    {title: "Batman", "cast.character": "Alfred"},
    {$push: {"cast.$.actor": "Michael Caine"} },
);

/* Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa. */
db.movies.updateOne(
    {title: "Batman", "cast.character": "Coringa"},
    {$push: {"cast.$.actor": "Heath Ledger"}},
);

/* Link para ler sobre o operador $: https://www.mongodb.com/docs/manual/reference/operator/update/positional/

Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o da imagem: */

/*🚀 Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.

Link para ler sobre o operador $: https://www.mongodb.com/docs/manual/reference/operator/update/positional/

Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem: */
db.movies.updateOne(
    {title: "Batman", "cast.character": "Batman"},
    {
        $push: {
            "cast.$.actor": {
                $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
                $sort: 1
            }
        }
    }
);