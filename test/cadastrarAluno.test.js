import request from 'supertest';
import app from '../src/app.js';
import { expect } from 'chai';

describe('Cadastrar Alunos', () => {

  it('deve retornar 200 e listar os alunos', async () => {

    const login = await request(app)
      .post('/api/auth/login')
      .send({
        email: process.env.EMAIL_ADMIN,
        senha: process.env.SENHA_ADMIN
      });

    const token = login.body.token;

    const response = await request(app)
      .get('/api/admin/alunos')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');

    const aluno = response.body.find(
      item => item.id === 'aluno-ana-souza'
    );

    expect(aluno).to.not.be.undefined;
    expect(aluno.nome).to.equal('Ana Souza');
    expect(aluno.email).to.equal('ana.souza@example.com');

  });

});