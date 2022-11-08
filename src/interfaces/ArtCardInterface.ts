import React from "react";

export interface ArtInterface {
  coverIMG: string;
  altIMG: string[];
  title: string;
  length: number;
  width: number;
  year: string;
  material: string;
}
export interface ArtworksInterface {
  [key: string]: ArtInterface;
}
