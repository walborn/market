import goods from 'mock/goods'

export default function handler(req, res) {
  res.status(200).json(goods)
}
