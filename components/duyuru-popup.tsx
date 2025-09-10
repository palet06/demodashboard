import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";



const DuyuruPopup = ({ baslik, desc,trigger,setTrigger }: { baslik: string; desc: string,trigger:boolean,setTrigger: (open: boolean) => void;}) => {
  return (
    <Dialog open={trigger}  onOpenChange={setTrigger} >
      <DialogTrigger className="cursor-pointer"></DialogTrigger>
      <DialogContent  className="min-w-[50rem] ">
        <DialogHeader  className="flex flex-col gap-5">
          <DialogTitle>{baslik}</DialogTitle>
          <DialogDescription className="whitespace-pre-line text-justify text-sky-800">
           {desc}
          </DialogDescription>
        </DialogHeader>
         <DialogClose asChild>
            <Button type="button" variant="secondary">
              Kapat
            </Button>
          </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DuyuruPopup;
