import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

//TODO: receber asgendamento como propriedade
const BookingItem = () => {
    return ( 
        
        <>
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
        </>
 );
}
 
export default BookingItem;