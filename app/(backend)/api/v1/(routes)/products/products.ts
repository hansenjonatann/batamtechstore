import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
      break;
    case 'POST':
      try {
        const { name, description, price } = req.body;
        const product = await prisma.product.create({
          data: { 
            name: String(name), 
            description: String(description), 
            price: parseFloat(price)
          },
        });
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
      }
      break;
    case 'PUT':
      try {
        const { id, name, description, price } = req.body;
        const product = await prisma.product.update({
          where: { id: String(id) }, // Ensure id is treated as a string
          data: { 
            name: String(name), 
            description: String(description), 
            price: parseFloat(price) 
          },
        });
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await prisma.product.delete({
          where: { id: String(id) }, // Ensure id is treated as a string
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
