let BotaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
// A variável Tarefas agora aponta corretamente para o div com ID 'tarefas'
let Tarefas = document.getElementById('tarefas'); 

BotaoAdd.addEventListener('click', function() {
    if (Input.value.trim() != '') { // Usei .trim() para evitar adicionar tarefas vazias
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + Input.value.trim();
        Input.value = '';

        // Evento para Marcar/Desmarcar a tarefa (Clique Simples)
        tarefa.addEventListener('click', function() {
            // Alterna a decoração de texto verificando o estado atual
            if (tarefa.style.textDecoration === 'line-through') {
                tarefa.style.textDecoration = '';
            } else {
                tarefa.style.textDecoration = 'line-through';
            }
        });

        // Evento para Remover a tarefa (Clique Duplo)
        tarefa.addEventListener('dblclick', function() {
            // Remove o elemento 'p' do seu pai (Tarefas)
            Tarefas.removeChild(tarefa);
        });
    }
});