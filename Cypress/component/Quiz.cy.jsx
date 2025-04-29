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

    it('selects an answer', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('.answer-option').first().click(); 
        cy.get('.selected').should('exist');
    });

    it('Gives new question on clicking next', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.answer-option').first().click();
        cy.get('button').contains('Next Question').click(); 
        cy.get('.question').should('exist');
        cy.get('.answer-option').should('have.length', 4);
    });

    it('shows the score at the end of the quiz', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('.answer-option').first().click(); 
        cy.get('button').contains('Next Question').click(); 
        cy.get('.score').should('exist');
    });

    it('resets the quiz', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('.answer-option').first().click(); 
        cy.get('button').contains('Next Question').click(); 
        cy.get('button').contains('Reset Quiz').click(); 
        cy.get('.question').should('not.exist');
    });
})

