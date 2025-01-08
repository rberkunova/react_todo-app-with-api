export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  isLoading?: boolean; // Додано поле isLoading для індикатора завантаження
  isPending?: boolean; // Новий прапорець для відстеження очікуваних змін
}
