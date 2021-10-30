import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveValue('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    render(<App />);
    const TASK = 'cafe';

    // acessar os elementos da tela
    const inputTask = screen.getByLabelText('Tarefa:');
    const btn = screen.queryByText('Adicionar');

    // interagir com os elementos (userEvent) (se necessário)
    userEvent.type(inputTask, TASK); // digita a tarefa no input
    userEvent.click(btn); // clica no botão

    // fazer os testes (expect)
    expect(screen.getByRole('listitem', {TASK})).toBeInTheDocument(); // aparece na tela uma li com a tarefa
  });
});

// acessar os elementos da tela

// interagir com os elementos (userEvent) (se necessário)

// fazer os testes (expect)