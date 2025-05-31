import BookingItem from "../_components/booking-item"
import Header from "../_components/header"
import { authOptions } from "../_lib/auth"
import { getServerSession } from "next-auth"
import { notFound } from "next/navigation"
import { db } from "../_lib/prisma"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    // TODO: mostrar o popup de login
    return notFound()
  }
  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    }
  })
  const concludedBookins = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    }
  })
  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Confirmados
        </h2>
        {confirmedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>
        {concludedBookins.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  )
}

export default Bookings
