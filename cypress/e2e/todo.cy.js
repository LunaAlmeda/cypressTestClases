describe('TODO app E2E', () => {
    it('Add task', () => {
      cy.visit('https://todomvc-app-for-testing.surge.sh')
      cy.get('.new-todo').type("New Task 1{enter}")
      cy.get('label').contains("New Task 1")
    })

    it('Mark task as completed', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("New Task 1{enter}")
        cy.get('.toggle').click()
        cy.get('.footer').contains("No items left")
      })

      it('Mark task as completed and then reverse it', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("New Task 1{enter}")
        cy.get('.toggle').click()
        cy.get('.footer').contains("No items left")
        cy.get('.toggle').click()
        cy.get('.footer').contains("1 item left")
      })

      it('Edit Task Name', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("New Task 1{enter}")
        cy.get('label').dblclick()
        cy.focused().clear().type("New task name{enter}")
        cy.get('label').contains("New task name")
      })

      it('Remove the task', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("New Task 1{enter}")
        cy.get('.destroy').invoke('show').click()
        cy.get('.label').should('not.exist')
      })

      it('Add different task and check if filters work', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("New Task 1{enter}")
        cy.get('.new-todo').type("New Task 2{enter}")
        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.get(':nth-child(2) > a')
        cy.get('.footer').contains("1 item left")
        cy.get(':nth-child(3) > a').click()
        cy.get(':nth-child(2) > .view > label').should('not.exist')
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(2) > .view > label').should('not.exist')
        cy.get(':nth-child(1) > a').click()
        cy.get(':nth-child(2) > .view > label').should('exist')
      })
})