const soma = (req, res) => {
  const conta = 5 + 10;
  res.send({conta})
}

module.exports = {soma}