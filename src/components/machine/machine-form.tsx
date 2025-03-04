import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MACHINE } from "@/types";
import { Dispatch, SetStateAction, useEffect } from "react";
import { SheetClose, SheetFooter } from "../ui/sheet";
import { Pencil, PlusCircleIcon } from "lucide-react";

const machineSchema = z.object({
  name: z.enum([
    "DS_L1_A",
    "DS_M1_A",
    "DS_M2_A",
    "DS_S1_A",
    "PHARMA_CONT_A",
    "PHARMA_CONT_B",
    "REF_L1_A",
    "REF_L1_B",
    "REF_M1_A",
    "REF_M1_B",
    "REF_S1_A",
    "REF_S1_B",
    "REF_25KG_A",
  ]),
  type: z.enum(["DS", "REF"]),
  grade: z.enum(["L1", "M1", "M2", "S1"]),
  bagSize: z.enum(["25kg", "50kg"]),
});

type MachineFormValues = z.infer<typeof machineSchema>;

type Props = {
  data: MACHINE | undefined;
  setOpen: Dispatch<SetStateAction<boolean>> | undefined;
  setReloadedTableData: Dispatch<SetStateAction<boolean>> | undefined;
  token: string;
};

export default function MachineForm({ data }: Props) {
  const form = useForm<MachineFormValues>({
    resolver: zodResolver(machineSchema),
    defaultValues: {
      name: undefined,
      type: undefined,
      grade: undefined,
      bagSize: undefined,
    },
  });

  const onSubmit = (data: MachineFormValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (data) {
      form.setValue("name", data.name);
      form.setValue("bagSize", data.bagSize);
      form.setValue("grade", data.grade);
      form.setValue("type", data.type);
    }
  }, [data]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name</FormLabel>
              <Select
                disabled={data ? true : false}
                onValueChange={field.onChange}
                defaultValue={data ? data.name : field.value}
              >
                <FormControl className=" w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a machine name" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    "DS_L1_A",
                    "DS_M1_A",
                    "DS_M2_A",
                    "DS_S1_A",
                    "PHARMA_CONT_A",
                    "PHARMA_CONT_B",
                    "REF_L1_A",
                    "REF_L1_B",
                    "REF_M1_A",
                    "REF_M1_B",
                    "REF_S1_A",
                    "REF_S1_B",
                    "REF_25KG_A",
                  ].map((name) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={data ? data.type : field.value}
              >
                <FormControl className=" w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DS">DS</SelectItem>
                  <SelectItem value="REF">REF</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={data ? data.grade : field.value}
              >
                <FormControl className=" w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="L1">L1</SelectItem>
                  <SelectItem value="M1">M1</SelectItem>
                  <SelectItem value="M2">M2</SelectItem>
                  <SelectItem value="S1">S1</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bagSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bag Size</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={data ? data.bagSize : field.value}
              >
                <FormControl className=" w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select bag size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="25kg">25kg</SelectItem>
                  <SelectItem value="50kg">50kg</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={!form.formState.isValid}
          className=" w-full"
          type="submit"
        >
          {data ? (
            <>
              Update <Pencil />
            </>
          ) : (
            <>
              Add <PlusCircleIcon />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
