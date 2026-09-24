import request from 'supertest';
import app from '../src/app.js';
import { expect } from 'chai';
import dotenv from 'dotenv';

dotenv.config();

describe('Login', () => {

    it('deve retornar 200 quando o usuário e senha forem corretos', async () => {

    const loginResposta = await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send({
        email: process.env.EMAIL_ADMIN,
        senha: process.env.SENHA_ADMIN
      });

    expect(loginResposta.status).to.equal(200);

  });

    it('deve retornar 200 e um token quando o admin informar e-mail e senha corretos', async () => {

    const resposta = await request(app)
      .post('/api/auth/login')
      .send({
        email: process.env.EMAIL_ADMIN,
        senha: process.env.SENHA_ADMIN
      });

    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property('token');
  });

    it('deve retornar 401 quando a senha informada for inválida', async () => {

    const resposta = await request(app)
      .post('/api/auth/login')
      .send({
        email: process.env.EMAIL_ADMIN,
        senha: 'senha-incorreta'
      });

    expect(resposta.status).to.equal(401);
    expect(resposta.body.error).to.equal('E-mail ou senha inválidos.');
  });

    //logar com aluno
    it('Login como aluno deverá retornar 200', async () => {

    const resposta = await request(app)
      .post('/api/auth/login')
      .send({
        email: process.env.EMAIL_ALUNO,
        senha: process.env.SENHA_ALUNO
      });

    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property('token');
  

    });

});