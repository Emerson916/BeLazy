const { Pool } = require('pg');

const DB_CREDENTIALS = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
  max: 100,
};

const pool = new Pool(DB_CREDENTIALS);

function db() {
  return async (req, res, next) => {
    try {
      const client = await pool.connect();
      req.client = client;

      req.log.info('Conexão com o banco criada');
      const select = await client.query(
        'SELECT numbackends FROM pg_stat_database WHERE datname = $1',
        [DB_CREDENTIALS.database]
      );
      req.log.info(
        `Conexões: ${select.rows[0].numbackends}/${DB_CREDENTIALS.max}`
      );
    } catch (e) {
      req.log.info('Erro na conexão com o banco de dados:');
      req.log.info(e);
      res.status(500).send();
      process.exit(77);
    } finally {
      req.log.info(`Conexão com o banco encerrada`);
      req.client.release();
    }
    next();
  };
}

module.exports = db;
