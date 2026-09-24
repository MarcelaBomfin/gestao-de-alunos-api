import request from 'supertest';
import app from '../src/app.js';
import { expect } from 'chai';
import dotenv from 'dotenv';

dotenv.config();

describe('Entrega Aluno', () => {

  it('Lista trabalhos entregues pelos alunos e retorna 200', async () => {

    const login = await request(app)
      .post('/api/auth/login')
      .send({
        email: process.env.EMAIL_ADMIN,
        senha: process.env.SENHA_ADMIN
      });

    const token = login.body.token;

    // Consulta de trabalhos
    const response = await request(app)
      .get('/api/admin/trabalhos')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');

    console.log(response.body);

  });

});