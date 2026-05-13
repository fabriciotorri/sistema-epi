class EmployeeController {

  async list(req, res) {

    return res.json([
      {
        id: 1,
        nome: 'João Silva',
        cargo: 'Soldador'
      },
      {
        id: 2,
        nome: 'Maria Souza',
        cargo: 'Eletricista'
      }
    ])

  }

  async create(req, res) {

    const {
      nome,
      cpf,
      cargo
    } = req.body

    return res.status(201).json({
      message: 'Funcionário cadastrado',
      funcionario: {
        nome,
        cpf,
        cargo
      }
    })

  }

}

module.exports = new EmployeeController()