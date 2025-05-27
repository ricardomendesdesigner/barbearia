"use server";

import { db } from "@/app/_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

interface GetbookingsProps {
    serviceId: string;
    date: Date
}

export const getbookings = ({date}: GetbookingsProps) => {
    return db.booking.findMany({
        where: {
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            }
        }
    })
}