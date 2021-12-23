import goods from 'mock/goods'

export default function handler(req, res) {
  const { id } = req.query
  const good = goods.find(i => +i.id === +id)
  res.status(200).json(good)
}
