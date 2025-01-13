import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Create a new booking
app.post('/bookings', async (req, res) => {
  const { name, email, address } = req.body;
  const newBooking = await prisma.booking.create({
    data: { name, email, address },
  });
  res.json(newBooking);
});

// Get all bookings
app.get('/bookings', async (req, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
});

// Update a booking
app.put('/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, address } = req.body;
  const updatedBooking = await prisma.booking.update({
    where: { id: parseInt(id) },
    data: { name, email, address },
  });
  res.json(updatedBooking);
});

// Delete a booking
app.delete('/bookings/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.booking.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Booking deleted successfully' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
