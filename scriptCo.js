function pegarDados (qualBotao) {
switch (qualBotao){
        case 'Você é idoso?':{
let div = document.getElementById("botaoSelecionado");
        div.classList.remove("true");
        div.classList.add("maria");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, peça para fazerem as compras para você!";
        break;
}
case 'Você sofre de problemas respiratórios?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("true");
        div.classList.add("maria");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, tome sol e faça exercícios leves!";
        break;
        }
        
        case 'Você é diabético?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("true");
        div.classList.add("maria");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa e cuide da sua saúde!";
        break;
        }
        
        case 'Você é saudável?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("true");
        div.classList.add("maria");
        document.getElementById("botaoSelecionado").innerHTML = "Faça compras pelos mais idosos, mas use máscaras!";
        break;
        }
        
        default:
        document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}
