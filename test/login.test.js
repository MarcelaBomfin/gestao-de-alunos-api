import { expect } from 'chai';
import { adminHelper } from '../helpers/adminHelper.js';
import { alunoHelper } from '../helpers/alunoHelper.js';


describe('Login', () => {

    it('deve retornar 200 quando o admin informar usuário e senha corretos', async () => {

        const resposta = await adminHelper.login();

        expect(resposta.status).to.equal(200);
    });

    it('deve retornar token quando o admin informar usuário e senha corretos', async () => {

        const resposta = await adminHelper.login();

        expect(resposta.status).to.equal(200);
        expect(resposta.body).to.have.property('token');
    });

    it('deve realizar login como aluno', async () => {

        const resposta = await alunoHelper.login();

        expect(resposta.status).to.equal(200);
        expect(resposta.body).to.have.property('token');
    });

});