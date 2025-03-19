import {
  Bike,
  Building2,
  Dumbbell,
  Footprints,
  GlassWater,
  Hospital,
  School,
  SquareParking,
  Store,
  WavesLadder,
} from "lucide-react";

export const amenitiesList = [
  { value: "1", label: "Medical center", Icon: Hospital },
  { value: "2", label: "Schools", Icon: School },
  { value: "3", label: "Sports Clubs", Icon: Dumbbell },
  { value: "4", label: "Business Hub", Icon: Building2 },
  { value: "5", label: "Outdoor pools", Icon: WavesLadder },
  { value: "6", label: "Underground parking", Icon: SquareParking },
  { value: "7", label: "Clubhouse", Icon: GlassWater },
  { value: "8", label: "bicycles lanes", Icon: Bike },
  { value: "9", label: "Commercial strip", Icon: Store },
  { value: "10", label: "Jogging trail", Icon: Footprints },
];

export const amenitiesIconList = {
  "Medical center": { Icon: Hospital },
  Schools: { Icon: School },
  "Sports Clubs": { Icon: Dumbbell },
  "Business Hub": { Icon: Building2 },
  "Outdoor pools": { Icon: WavesLadder },
  "Underground parking": { Icon: SquareParking },
  Clubhouse: { Icon: GlassWater },
  "bicycles lanes": { Icon: Bike },
  "Commercial strip": { Icon: Store },
  "Jogging trail": { Icon: Footprints },
};
