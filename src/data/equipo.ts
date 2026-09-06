export interface TeamMember {
  name: string;
  title: string;
  role: string;
  id: string;
  initial: string;
}

export const team: TeamMember[] = [
  { name: "Arq. Moises Sumari Jara", title: "Arquitecto", role: "CAP", id: "20636", initial: "MS" },
  { name: "Ing. Civil Ruben Melo Laguna", title: "Ingeniero Civil", role: "CIP", id: "114010", initial: "RM" },
  { name: "Ing. Electricista Nerbaldo N. Araujo", title: "Ingeniero Electricista", role: "CIP", id: "356625", initial: "NN" },
  { name: "Ing. Sanitario Wilmer A. Perez", title: "Ingeniero Sanitario", role: "CIP", id: "102980", initial: "WP" },
  { name: "Ing. Civil Javier F. Ulloa Clavijo", title: "Ingeniero Civil", role: "CIP", id: "193667", initial: "JU" },
  { name: "Ing. Civil Jose Pereda Salguero", title: "Ingeniero Civil", role: "CIP", id: "344505", initial: "JP" },
];
