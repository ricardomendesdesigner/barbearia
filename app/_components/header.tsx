import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {  CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react" // Adjust the path to where MenuIcon is located
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="barbearia" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            
            <div className="py-5 border-b border-solid flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

                </Avatar>
                <div>
                    <p className="font-bold">Paulo Ricardo</p>
                    <p className="test-xs">pauloricardo@email.com</p>
                 </div>
            </div>

            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                   <Link href="/">
                   <HomeIcon size={18}/>
                   Início
                   </Link>
                </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18}/>
                    Agendamentos
                </Button>
            </div>

            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                {quickSearchOptions.map((option) => (
                 <Button key={option.title} className="justify-start gap-2" variant="ghost">
                    <Image src={option.imageUrl} height={18} width={18} alt={option.title}/>
                     {option.title}
                 </Button>
                ))}
            
            </div>

            <div className="flex flex-col gap-2 py-5">
                
              <Button className="justify-start gap-2" variant="ghost">
                <LogOutIcon size={18}/>
                Sair da conta
              </Button>            
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
