let arrayAbrigos = []

mostrarMenu()

function mostrarMenu() {
    let menu = prompt(`===== ABRIGOS TEMPORÁRIOS =====
        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair
        Escolha uma opção:`)

        switch (menu) {
            case '1':
            cadastrarAbrigo()
            break;
            case '2':
            listarAbrigos()
            break;
            case '3':
            procurarAbrigo()
            break;
            case '4':
            fecharApp()
            break;
            default:
            console.log('Opção Inválida')
            mostrarMenu()
            break;
        
        }
}

function cadastrarAbrigo() {
    let cadAbrigo = {}
    
    let nome = prompt('Nome do abrigo que deseja adicionar:')
    let endereco = prompt('Endereço do abrigo que deseja adicionar:')
    let telefoneAbrigo = prompt('Telefone do abrigo que deseja adicionar:')
    let lotacaoAbrigo = prompt('Lotação do abrigo que deseja adicionar:') 

    cadAbrigo.nome = nome 
    cadAbrigo.endereco = endereco 
    cadAbrigo.telefoneAbrigo = telefoneAbrigo 
    cadAbrigo.lotacao = lotacaoAbrigo 
    cadAbrigo.cidade = prompt('cidade do abrigo que deseja adicionar:')
    arrayAbrigos.push(cadAbrigo)
    listarAbrigos()
    mostrarMenu()
}

function listarAbrigos() {
    console.log(`LISTAGEM DE ABRIGOS:`)
    console.log(`Código | Nome | Endereço | Telefone | Capacidade | cidade`)

    for(let i = 0; i < arrayAbrigos.length; i++) {
        arrayAbrigos[i].codigo = i + 1;
        
        console.log(`${arrayAbrigos[i].codigo} | ${arrayAbrigos[i].nome} | ${arrayAbrigos[i].endereco} | ${arrayAbrigos[i].telefoneAbrigo} | ${arrayAbrigos[i].lotacao} | ${arrayAbrigos[i].cidade}`);
    }
    mostrarMenu()
}

function procurarAbrigo() {
    let cidade = prompt('Qual a cidade que você está procurando?')

    for(let i = 0; i < arrayAbrigos.length; i++){
            if(arrayAbrigos[i].cidade === cidade) {
                console.log(`${arrayAbrigos[i].codigo} | ${arrayAbrigos[i].nome} | ${arrayAbrigos[i].endereco} | ${arrayAbrigos[i].telefoneAbrigo} | ${arrayAbrigos[i].lotacao} | ${arrayAbrigos[i].cidade}`);
            }
    }
    mostrarMenu()
}

function fecharApp() {
    let fechar = prompt('Você quer mesmo fechar o APP? [S] ou [N]')
    
    if (fechar.toLowerCase() === 's') {
        console.log('Programa Encerrado!');
    } else if (fechar.toLowerCase() === 'n') {
        mostrarMenu()
    } else {
        fecharApp()
    }
}