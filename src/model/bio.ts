export enum Gender {
  Male,
  Female,
}

export default interface Bio {
  nama: string;
  umur: number;
  gender: Gender;
}
