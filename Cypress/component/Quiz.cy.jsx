import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    beforeEach(() => {
        // cy.intercept({method: 'GET', url: '/api/questions/random'}, {fixture: 'fix.json', statusCode: 200}).as('getRandomQuestions');
    });
    it('it renders correctly', () => {
        cy.mount(<Quiz/>);
    });

    it('starts the quiz', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        // cy.get('button').should('have.text', 'Next Question');
    });

    it('shows the question and answer options', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('h2').should('exist');
        cy.get('.btn').should('exist');
    });

    it('selects an answer', () => {
        cy.mount(<Quiz/>);
        // cy.get('button').contains('Start Quiz').click(); 
        cy.get('.btn').first().click();
    });

    it('Gives new question on clicking next', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click(); 
        cy.get('.btn').first().click();
        cy.get('.btn').should('exist');
    });

    it('completes quiz', () => {
        cy.mount(<Quiz/>);
        // cy.get('button').contains('Start Quiz').click(); 
        for (let i = 0; i < 11; i++) {
            cy.get('.btn').first().click();
        }
        cy.get('h2').contains('Quiz Completed');
    });

    it('resets the quiz', () => {
        cy.mount(<Quiz/>);
        for (let i = 0; i < 11; i++) {
            cy.get('.btn').first().click();
        }
        cy.get('button').contains('Take New Quiz').click(); 
    });
})

