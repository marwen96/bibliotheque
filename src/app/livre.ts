export interface Livre {
  id: number ;
  title: string;
  idBibliotheque: string;
  ecrivain: string;
  prix: number;
  disponible: boolean;
  description: string;
  dateSortie: Date;
}
