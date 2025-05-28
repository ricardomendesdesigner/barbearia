import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";

const SignInDialog = () => {
     const handleLoginWithGoogleClick = () => signIn("google")
    return ( 
        <>
        <DialogHeader>
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta Google.
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          className="gap-1"
          onClick={handleLoginWithGoogleClick}
        >
          <Image
            src="/google.svg"
            alt="Fazer login com o Google"
            width={18}
            height={18}
          />
          Google
        </Button>
        </>
     );
}
 
export default SignInDialog;