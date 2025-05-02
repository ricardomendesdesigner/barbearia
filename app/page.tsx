import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./_components/ui/avatar";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  
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

     {/* imagem */} 
    <div className="relative w-full h-[150px] mt-6">
    <Image alt="Agende com os melhores" src="/banner-01.png" fill className="object-cover rounded-xl" />
    </div>

    {/* Agendamento */}
    <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">Agendamentos</h2>
    <Card >
      <CardContent className="flex justify-between p-0">
          {/* Div da Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" className="rounded-full" />
                </Avatar>
                <p className="text-sm">Barbearia Ricardo</p>
              </div>
          </div>
          {/* Div da Direita */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
          </div>
      </CardContent>
    </Card>

    <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
      Recomendados
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
         <BarbershopItem key={barbershop.id} barbershop={barbershop} />))}
      </div>
    </div>
  </div>
  
);
    
};

export default Home;


