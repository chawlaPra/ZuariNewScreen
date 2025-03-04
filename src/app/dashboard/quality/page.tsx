"use client";
import { QualityDataTable } from "@/components/quality/quality-table";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { MainQuality } from "@/types";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const q: MainQuality[] = [
  {
    tagName: "DS_L1",
    counterReading: 1023,
    calculatedQuantityInQunital: 50.5,
    lastApprovedQuantity: "48.2",
    QaApprovedQuantity: "49.0",
    calculatedQualityReadingTime: "2024-03-04T10:30:00Z",
    lastApprovedQualityReadingTime: "2024-03-03T18:45:00Z",
    id: "2",
    subQualities: [
      {
        tagName: "DS_L1_A",
        counterReading: 500,
        calculatedQuantityInQunital: 25.3,
        lastApprovedQuantity: "24.1",
        QaApprovedQuantity: "24.8",
        calculatedQualityReadingTime: "2024-03-04T09:15:00Z",
        lastApprovedQualityReadingTime: "2024-03-03T17:30:00Z",
        id: "12",
      },
      {
        tagName: "REF_L1_A",
        counterReading: 1500,
        calculatedQuantityInQunital: 75.0,
        lastApprovedQuantity: "72.8",
        QaApprovedQuantity: "74.0",
        calculatedQualityReadingTime: "2024-03-04T11:00:00Z",
        lastApprovedQualityReadingTime: "2024-03-03T19:00:00Z",
        id: "33",
      },
    ],
  },
  {
    tagName: "DS_L1",
    counterReading: 1023,
    calculatedQuantityInQunital: 50.5,
    lastApprovedQuantity: "48.2",
    QaApprovedQuantity: "49.0",
    calculatedQualityReadingTime: "2024-03-04T10:30:00Z",
    lastApprovedQualityReadingTime: "2024-03-03T18:45:00Z",
    id: "3",
    subQualities: [
      {
        tagName: "DS_S1_A",
        counterReading: 500,
        calculatedQuantityInQunital: 25.3,
        lastApprovedQuantity: "24.1",
        QaApprovedQuantity: "24.8",
        calculatedQualityReadingTime: "2024-03-04T09:15:00Z",
        lastApprovedQualityReadingTime: "2024-03-03T17:30:00Z",
        id: "12",
      },
    ],
  },
];

export default function Page() {
  const [isReloaded, setIsReloaded] = useState(true);

  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <div className="p-6 space-y-4">
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start sm:items-start flex-col">
          <h1 className=" text-lg sm:text-2xl font-semibold">
            Sugar Quality Parameters
          </h1>
        </div>
      </div>

      <Card>
        <CardContent>
          <QualityDataTable
            data={q}
            token={token}
            setIsReloaded={setIsReloaded}
          />
        </CardContent>
      </Card>
    </div>
  );
}
