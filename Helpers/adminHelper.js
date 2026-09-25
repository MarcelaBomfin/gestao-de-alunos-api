import request from 'supertest';
import app from '../src/app.js';
import dotenv from 'dotenv';

dotenv.config();

export class adminHelper {

    static async login() {

                console.log('EMAIL_ADMIN:', process.env.EMAIL_ADMIN);
                console.log('SENHA_ADMIN:', process.env.SENHA_ADMIN);

        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: process.env.EMAIL_ADMIN,
                senha: process.env.SENHA_ADMIN


            });

        return response;
    }

    static async obterToken() {

        const response = await this.login();

        return response.body.token;
    }

    static async cadastrarAluno(aluno) {

        const token = await this.obterToken();

        return await request(app)
            .post('/api/admin/alunos')
            .set('Authorization', `Bearer ${token}`)
            .send(aluno);

    }
}