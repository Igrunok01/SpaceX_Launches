export type Launch = {
  flight_number: number;
  mission_name: string;
  details: string;
  links?: {
    mission_patch_small?: string | null;
  };
  rocket?: {
    rocket_name?: string | null;
  };
};
