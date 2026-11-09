describe('Gerenciador de Tarefas', () => {
  it('Adiciona uma nova tarefa', () => {
    cy.visit('http://localhost:3000'); // Substitua pela URL da aplicação

    cy.get('[data-testid="input-tarefa"]').type('Aprender Cypress');
    cy.get('[data-testid="botao-adicionar"]').click();

    cy.get('[data-testid="lista-tarefas"]')
      .should('contain', 'Aprender Cypress');
  });
});
