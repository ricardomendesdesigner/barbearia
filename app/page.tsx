import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"







const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  
  return (
  <div>
    {/*header*/}
    <Header />
    {/*Banner*/}
    <div className="p-5">
    <h2 className="text-xl font-bold">Olá, Paulo Ricardo!</h2>
    <p>Segunda-feira, 05 de Agosto.</p>

    {/* Busca */}
    <div className="flex items-center gap-2 mt-6">
      <Input placeholder="Faça sua busca.."/>
      <Button>
        <SearchIcon />
      </Button>
    </div>

            {/* BUSCA RÁPIDA */}
            <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              
            >
              <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
            
            </Button>
          ))}
        </div>


     {/* imagem */} 
    <div className="relative w-full h-[150px] mt-6">
    <Image alt="Agende com os melhores" src="/banner-01.png" fill className="object-cover rounded-xl" />
    </div>

    {/* Agendamento */}
    <BookingItem />

    <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
      Recomendados
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
         <BarbershopItem key={barbershop.id} barbershop={barbershop} />))}
      </div>

      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
    </div>
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">barbearia Paulo</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  </div>
  
);
    
};

export default Home;


