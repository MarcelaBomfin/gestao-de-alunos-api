import request from 'supertest';
import app from '../src/app.js';
import dotenv from 'dotenv';

dotenv.config();
//teste teste 

export class alunoHelper {

    static async login() {

        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: process.env.EMAIL_ALUNO,
                senha: process.env.SENHA_ALUNO
            });

        return response;
    }

    static async obterToken() {

        const response = await this.login();

        return response.body.token;
    }
}