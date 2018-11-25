

let responseParser = (req, res, results) => {
	 res.status(200)
	 res.json({"data": results});
}

module.exports = responseParser