import { adminHelper } from '../Helpers/adminHelper.js';
import { expect } from 'chai';
import alunos from '../Data/alunos.json' with { type: 'json' };

describe('Cadastrar Alunos', () => {

    alunos.forEach((aluno) => {

        it(`deve cadastrar o aluno ${aluno.nome}`, async () => {

            const response = await adminHelper.cadastrarAluno({
                ...aluno,
                email: `${Date.now()}_${aluno.email}`,
                matricula: `${Date.now()}`
            });

            expect(response.status).to.equal(201);

        });

    });

});