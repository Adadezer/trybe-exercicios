import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.
    render(<App />)

    const inputTask = screen.getByLabelText('Tarefa:');
    const btn = screen.getByRole('button');

    listTodo.forEach(task => {
      userEvent.type(inputTask, task)
      userEvent.click(btn)

      expect(screen.getByText(task)).toBeInTheDocument()
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Fazer o exercicio"/>);

    expect(screen.getByText("Fazer o exercicio")).toBeInTheDocument();
  })
})

// acessar os elementos da tela

// interagir com os elementos (userEvent) (se necessário)

// fazer os testes (expect)