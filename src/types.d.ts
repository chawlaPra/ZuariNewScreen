export interface MACHINE {
  name:
    | "DS_L1_A"
    | "DS_M1_A"
    | "DS_M2_A"
    | "DS_S1_A"
    | "PHARMA_CONT_A"
    | "PHARMA_CONT_B"
    | "REF_L1_A"
    | "REF_L1_B"
    | "REF_M1_A"
    | "REF_M1_B"
    | "REF_S1_A"
    | "REF_S1_B"
    | "REF_25KG_A";

  type: "DS" | "REF";
  id: string;
  grade: "L1" | "M1" | "M2" | "S1";
  bagSize: "25kg" | "50kg";
}

export interface QUALITY {
  id:string;
  counterReading: number;
  calculatedQuantityInQunital: number;
  lastApprovedQuantity: string;
  QaApprovedQuantity: string;
  calculatedQualityReadingTime: string;
  lastApprovedQualityReadingTime: string;
}

export interface MainQuality extends QUALITY {
  tagName:
    | "DS_L1"
    | "DS_M1"
    | "DS_M2"
    | "DS_S1"
    | "PHARMA_CONT"
    | "PHARMA_CONT"
    | "REF_L1"
    | "REF_L1"
    | "REF_M1"
    | "REF_M1"
    | "REF_S1"
    | "REF_S1"
    | "REF_25KG";
  subQualities: SUBQUALITY[];
}
export interface SUBQUALITY extends QUALITY {
  tagName:
    | "DS_L1_A"
    | "DS_M1_A"
    | "DS_M2_A"
    | "DS_S1_A"
    | "PHARMA_CONT_A"
    | "PHARMA_CONT_B"
    | "REF_L1_A"
    | "REF_L1_B"
    | "REF_M1_A"
    | "REF_M1_B"
    | "REF_S1_A"
    | "REF_S1_B"
    | "REF_25KG_A";
}
