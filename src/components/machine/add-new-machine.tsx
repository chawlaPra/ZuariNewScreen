import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle } from "lucide-react";
import MachineForm from "./machine-form";

type Props = {
  token :string;
}

export default function AddNewMachine({token}:Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          Add <PlusCircle className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Add New Machine</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <MachineForm token={token} setOpen={undefined} setReloadedTableData={undefined}  data={undefined} />
      </SheetContent>
    </Sheet>
  );
}
