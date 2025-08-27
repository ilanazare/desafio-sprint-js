class contato {
    constructor(nome, email, telefone, tipo, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value);
            form.elements.namedItem("mensagem").value;
            console.log("Dados do formulário", data)
            alert(`Obrigado, ${data.nome}! ${data.tipo} foi enviado(a) com sucesso`);
            form.reset();

  }

