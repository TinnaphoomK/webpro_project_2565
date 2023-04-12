import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'tinz@gmail.com',
      studentId: '64070152',
      password: '12345678',
      firstName: 'tinz',
      lastName: 'tinz',
      role: 'admin',
      Reservation: {
        create: {
          roomId: 1,
          dateTimeStart: new Date('2023-04-11T09:00:00Z'),
          dateTimeEnd: new Date('2023-04-11T10:00:00Z'),
          status: 'pending'
        }
      }
    }
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      studentId: '987654321',
      password: 'password456',
      firstName: 'Jane',
      lastName: 'Doe',
      role: 'user'
    }
  })

  const room1 = await prisma.room.create({
    data: {
      name: 'Auditorium',
      floor: '1st floor',
      detail: 'Small meeting room'
    }
  })

  const report1 = await prisma.report.create({
    data: {
      userId: user1.studentId,
      roomId: room1.id,
      detail: 'The projector is broken',
      status: 'pending'
    }
  })

  console.log({ user1, user2, room1, report1 })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })