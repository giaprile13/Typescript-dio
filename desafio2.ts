enum função {
  "Atriz",
  "Padeiro"
}

type Person = {
  nome: string,
  idade: number,
  profissao: função
}


let pessoa1: Person = {
  nome : "maria",
  idade : 29,
  profissao : função.Atriz

}

let pessoa2: Person = {
  nome: "roberto",
  idade: 19,
  profissao: função.Padeiro
}


let pessoa3: Person = {
  nome: "laura",
  idade: 32,
  profissao: função.Atriz
};

let pessoa4: Person = {
  nome : "carlos",
  idade : 19,
  profissao : função.Padeiro
}