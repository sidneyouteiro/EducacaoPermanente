import sys

from utilities.loggers import get_logger
from sqlalchemy.exc import InternalError
from database.session import get_session
from sqlalchemy.exc import InternalError
from database.model.Model import User, Turma, Aluno, alunoXturma
from utilities.montaRelatorio import frequencia

def turma_info(turma):
    return {
        'nomeDoPropositor': f'{turma.propositor.usuario}',
        'id_turma': f'{turma.id_turma}',
        'nome_do_curso': f'{turma.nome_do_curso}',
        'id_do_responsavel': f'{turma.id_responsavel}',
        'Carga_Horaria_Total': f'{turma.carga_horaria_total}'
    }


class ListTurmaApoiadorService:
    def execute(self, apoiadorData):
        logger = get_logger(sys.argv[0])
        try:
            session = get_session()
            QueryUsuario = session.query(User).filter(User.usuario == apoiadorData["usuario"]).first()
            if not QueryUsuario.AlunoApoiador:
                return {"Error":"Usuario não está inscrito em nenhuma turma como apoiador"}, 502
            data = session.query(Turma).filter(Turma.id_turma == QueryUsuario.AlunoApoiador.apoiador_id_turma).first()
            turmas = [turma_info(data)]
            session.close()
            return turmas
        except InternalError:
            logger.error("Banco de dados (EdPermanente) desconhecido")
            return "502ERROR"
