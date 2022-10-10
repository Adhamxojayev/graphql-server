import { fetch, fetchAll } from "../../lib/postgres.js";


const GETUSER = async ({search, pagination}) => {

  const page = pagination?.page || 1
  const limit = pagination?.limit || 10

  return await fetchAll(
    `select 
        * 
    from users
    where username ilike concat('%', $1::varchar, '%')
          or contact ilike concat('%', $1::varchar )
    offset $2 limit $3      
  `,
    [search, (page - 1) * limit, limit]
  );
}



const POSTUSER = async ({username, contact}) => {
  return await fetch(`
      insert into users
      (username, contact) values ($1, $2)
      returning *
  `, [username, contact]);
};



export default {
  GETUSER,
  POSTUSER
}