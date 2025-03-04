"use client";
import { MachineDataTable } from "@/components/machine/machine-table";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { MACHINE } from "@/types";
import {
  Box,
  FileUser,
  Package,
  ShoppingCartIcon,
  Store,
  UserPen,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const machines: MACHINE[] = [
  {
    name: "DS_L1_A",
    type: "DS",
    id: "1",
    grade: "L1",
    bagSize: "25kg",
  },
  {
    name: "DS_M1_A",
    type: "DS",
    id: "2",
    grade: "M1",
    bagSize: "50kg",
  },
  {
    name: "DS_M2_A",
    type: "DS",
    id: "3",
    grade: "M2",
    bagSize: "25kg",
  },
  {
    name: "DS_S1_A",
    type: "DS",
    id: "4",
    grade: "S1",
    bagSize: "50kg",
  },
  {
    name: "PHARMA_CONT_A",
    type: "DS",
    id: "5",
    grade: "M1",
    bagSize: "25kg",
  },
  {
    name: "PHARMA_CONT_B",
    type: "DS",
    id: "6",
    grade: "M2",
    bagSize: "50kg",
  },
  {
    name: "REF_L1_A",
    type: "REF",
    id: "7",
    grade: "L1",
    bagSize: "25kg",
  },
  {
    name: "REF_L1_B",
    type: "REF",
    id: "8",
    grade: "L1",
    bagSize: "50kg",
  },
  {
    name: "REF_M1_A",
    type: "REF",
    id: "9",
    grade: "M1",
    bagSize: "25kg",
  },
  {
    name: "REF_M1_B",
    type: "REF",
    id: "10",
    grade: "M1",
    bagSize: "50kg",
  },
  {
    name: "REF_S1_A",
    type: "REF",
    id: "11",
    grade: "S1",
    bagSize: "25kg",
  },
  {
    name: "REF_S1_B",
    type: "REF",
    id: "12",
    grade: "S1",
    bagSize: "50kg",
  },
  {
    name: "REF_25KG_A",
    type: "REF",
    id: "13",
    grade: "M2",
    bagSize: "25kg",
  },
];

export default function Page() {
  const [isReloaded, setIsReloaded] = useState(true);

  const token = useSelector((state: RootState) => state.auth.token);
  const userType = useSelector((state: RootState) => state.auth.userType);

  return (
    <div className="p-6 space-y-4">
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start sm:items-start flex-col">
          <h1 className=" text-lg sm:text-2xl font-semibold">
            Machine Configuration
          </h1>
        </div>
      </div>
      <Card>
        <CardContent>
          <MachineDataTable
            data={machines}
            token={token}
            setIsReloaded={setIsReloaded}
          />
        </CardContent>
      </Card>
    </div>
  );
}
