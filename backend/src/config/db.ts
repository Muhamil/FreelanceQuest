import { DataTypes, Sequelize } from 'sequelize'

const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost'
const POSTGRES_USER = process.env.POSTGRES_USER || 'root'
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || ''
const POSTGRES_DATABASE = process.env.POSTGRES_DB || 'Freelancing Platform'
const POSTGRES_PORT = process.env.POSTGRES_PORT || 5432

export const db = new Sequelize({
  dialect: 'postgres',
  host: POSTGRES_HOST,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  port: Number(POSTGRES_PORT),
})

const sqlConnection = async () => {
  try {
    const connect = await db.authenticate() // Use authenticate() to check the connection
    console.log('POSTGRES connected successfully')

    return connect
  } catch (error) {
    console.error('POSTGRES connection error', error)
  }
}

export default sqlConnection
