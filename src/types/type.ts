// export interface Itechnology {
//   id: number;
//   name: string;
//   category:
//     | "Frontend"
//     | "Backend"
//     | "Database"
//     | "Language"
//     | "Styling"
//     | "DevOps"
//     | "Tools";
//   description: string;
//   icon: string;
//   rating: number;
//   difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
//   badge: string;
// }
export interface Itechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}