import chalk from 'chalk'
import dedent from 'dedent'
import inquirer from 'inquirer'
import {mongoose} from '../../database'
import {CampusModel} from '../../schemas/Campus'
import {UsersModel} from '../../schemas/Users'

((async () => {

  const answer = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'O conteúdo do banco será perdido se essa seed for executada. Deseja continuar?'
  }])

  if (!answer.confirm) {
    process.exit(0)
  }

  await mongoose.connection.db.dropDatabase()

  await CampusModel.insertMany([
    {
      name: 'Nenhum'
    }
  ])

  await UsersModel.insertMany([
    {
      name: 'Administrador Geral',
      preferred_name: 'Administrador Geral',
      userNumber: '123456',
      email: 'admin@gmail.com',
      password: '$2a$12$.jkXS4kTtNL9hawpyI69s.GoqVU10SYM6A4s7wy7ae1ZGsMCml8Ai',
      campus: 'Nenhum',
      registrationCode: 'AZVDFDMR',
      type: 'ADMIN',
      status: 'ACTIVE'
    }
  ])

  mongoose.connection.close()

  console.info(dedent(`
    ${chalk.green('[Server]')} Seed executada com sucesso!
  `))
}))()