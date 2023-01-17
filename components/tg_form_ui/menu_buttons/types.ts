type Parameter = {
  parameterId: number;
  value: string;
  minValue: string;
};

type PostData = {
  category?: {
    id: number | null;
  };
  type?: {
    id: number | null;
  };
  minPrice?: number;
  maxPrice?: number;
  city?: {
    id: number | null;
  };
  metros?: {
    id: number;
  }[];
  districts?: {
    id: number;
  }[];
  // author: {
  //   id: number | null;
  // };
  parameters?: Parameter[];
  minKmMetro?: number;
  maxKmMetro?: number;
  fee?: boolean;
  polygons?: any;
  typeOfPart?: string;
  minYear?: number;
  maxYear?: number;
  lastFloor?: boolean;
};

export type { PostData, Parameter };
