const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "facesearchdb",
	password: "KDisArtist",
	port: 5432,
});

module.exports = pool;
const checkConnection = async () => {
	try {
		const result = await pool.query("SELECT * FROM users");
		const user = result.rows[0];
		console.log(result.rows);
	} catch (error) {
		console.error(error);
	}
};

checkConnection();
