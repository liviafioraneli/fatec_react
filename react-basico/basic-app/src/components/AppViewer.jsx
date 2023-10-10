import styles from './AppViewer.module.css'
//Camada de compilação de serviços

const AppViewer = () => {
  const professores = [
    {
      id: 1,
      nome: 'João',
      idade: 35,
      formacao: 'Engenharia',
      titulacao: 'Mestre'
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 40,
      formacao: 'Ciência da Computação',
      titulacao: 'Doutora'
    },
    {
      id: 3,
      nome: 'Pedro',
      idade: 30,
      formacao: 'Matemática',
      titulacao: 'Especialista'
    },
    {
      id: 4,
      nome: 'Ana',
      idade: 28,
      formacao: 'Letras',
      titulacao: 'Especialista'
    },
    {
      id: 5,
      nome: 'Lucas',
      idade: 45,
      formacao: 'Física',
      titulacao: 'Doutor'
    },
    {
      id: 6,
      nome: 'Juliana',
      idade: 33,
      formacao: 'Química',
      titulacao: 'Mestre'
    },
    {
      id: 7,
      nome: 'Ricardo',
      idade: 50,
      formacao: 'Administração',
      titulacao: 'Doutor'
    },
    {
      id: 8,
      nome: 'Fernanda',
      idade: 42,
      formacao: 'Psicologia',
      titulacao: 'Especialista'
    },
    {
      id: 9,
      nome: 'Gustavo',
      idade: 37,
      formacao: 'Educação Física',
      titulacao: 'Mestre'
    }]
  
  //retorno no display
  return (
   <>
   <h2>Lista de Professores</h2>
   {/* {
    professores.map((professor) => {
      return(
        <div key={professor.id}>
          <ul>
            <li><strong>Nome: </strong>{professor.nome}</li>
            <li><strong>Idade: </strong>{professor.idade}</li>
            <li><strong>Formação: </strong>{professor.formacao}</li>
            <li><strong>Titulação:</strong>{professor.titulacao}</li>
          </ul>
        </div>

      )
    })
    } */}

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
      </thead>
      <tbody>
        {
          professores.map((professor) => {
            return(
              <tr className={professor.id % 2==1 ? styles.linhaCinza:null} key={professor.id}>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className={professor.titulacao=="Mestre" || professor.titulacao=="Doutor"? styles.superTitulo :styles.normalTitulo}>{professor.titulacao}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
     
   </>
  )
  }

export default AppViewer