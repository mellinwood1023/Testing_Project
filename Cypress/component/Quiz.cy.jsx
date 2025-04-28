import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept({method: 'GET', url: '/api/questions/random'}, {fixture: 'fix.json', statusCode: 200}).as('getRandomQuestions');
    });
    it('it renders correctly', () => {
        cy.mount(<Quiz/>);
    });

    it('starts the quiz', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('button').should('have.text', 'Next Question');
    });

    it('shows the question and answer options', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('.question').should('exist');
        cy.get('.answer-option').should('have.length', 4);
    });
})

