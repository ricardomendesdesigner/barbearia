"use client"

import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"


const SidebarSheet = () => {
    return ( 
    
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
      
     );
}
 
export default SidebarSheet;