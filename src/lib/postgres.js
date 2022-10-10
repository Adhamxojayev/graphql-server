import pg from 'pg';


const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

async function fetch(SQL, params=[]) {
  const client = await pool.connect()
  try {
      const {rows: [row]} = await client.query(SQL, params)
      return row
  } catch (error) {
    console.log(error);
  }finally{
    client.release()
  }
}

async function fetchAll( SQL, params=[] ) {
  const client = await pool.connect()
  try {
      const {rows} = await client.query(SQL, params)
      return rows
  } catch (error) {
    console.log(error);
  }finally{
    client.release()
  }
}


export {
  fetch,
  fetchAll
}