const getHome = (req, res, next) => {
  try {
      return res.status(200).send('GOT THIS')
  } catch (err) {
    return next(err)
  }
}
module.exports = {getHome}