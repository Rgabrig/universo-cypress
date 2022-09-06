


it('deve cadastrar um novo usuário', function(){

    const name = 'Raphael Gabrig'
    const email = 'raphaelgabrig@samuraibs.com'
    const password = '123456'

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(name)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Senha"]').type(password)
})