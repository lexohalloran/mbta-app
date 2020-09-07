export interface Resource {
  data: Datum[];
}

export interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  type: number,
  long_name: string,
  name: string,
  direction_names: string[],
  direction_destinations: string[],
  sort_order: number,
  description: string,
  color: string
}