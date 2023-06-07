const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () =>{
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"' , async ()=>{
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('origin');
            expect(response).toHaveProperty('image');
        });
        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/6000').expect(500);
        });
    })
    describe("GET /rickandmorty/login", ()=>{
        it('Valida si el Email y Password son correctos y coinciden', async ()=>{
            const response = (await agent.get('/rickandmorty/login?email=ejemplo@gmail.com&password=123456')).body
            expect(response.access).toEqual(true)
        });

        it('Valida si el Email y Password son incorrectos o no coinciden', async ()=>{
            const response = (await agent.get('/rickandmorty/login?email=ejempl@gmail.com&password=123456')).body
            expect(response.access).toEqual(false)
        });
    })
    describe("POST /rickandmorty/fav", ()=>{
        const character1 = { id:1, name:'Rick', species:'Human', origin:'Earth'}
        const character2 = { id:2, name:'Morty', species:'Human', origin:'Earth'}

        it("Lo que envies es agregado al arreglo de favoritos", async ()=>{
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        });
        it('Devuelve el previo elemento enviado y el actual', async ()=>{
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        });
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const character1 = { id:1, name:'Rick', species:'Human', origin:'Earth'}
        const character2 = { id:2, name:'Morty', species:'Human', origin:'Earth'}

        it("Verifica si no existe el id enviado", async ()=>{
            const response = (await agent.delete('/rickandmorty/fav/6000')).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        });
        it("Verifica si el id es el correcto y elimina el personaje de la lisat de favoritos",  async ()=>{
            const response = (await agent.delete('/rickandmorty/fav/1')).body;
            expect(response).toContainEqual(character1);
        })
    })
});