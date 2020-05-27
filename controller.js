module.exports = {
	addMovie: (req, res) => {
		// Bring in what you need for the function
		const { movieName } = req.body

		// Get the database
		const db = req.app.get('db')

        console.log(movieName)
		// Run SQL query
		db.add_movie(movieName)
			.then(movie => res.status(200).send(movie))
			.catch(err => res.status(500).send(err))
	},
	updateMovie: (req, res) => {
		const { movieId } = req.params
		const { movieName } = req.body

		const db = req.app.get('db')

		db.update_movie(movieName, movieId)
			.then(() => res.sendStatus(200))
			.catch(err => res.status(500).send(err))
	},
	getMovies: (req, res) => {
		const db = req.app.get('db')

		db.get_movies()
			.then(movies => res.status(200).send(movies))
			.catch(err => res.status(500).send(err))
	},
	deleteMovie: (req, res) => {
		const { movieId } = req.params
		const db = req.app.get('db')

		db.delete_movie(movieId)
			.then(() => res.sendStatus(200))
			.catch(err => res.status(500).send(err))
	}
}
