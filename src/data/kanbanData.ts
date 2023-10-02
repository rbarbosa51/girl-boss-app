export type dataType = {
  Id: number;
  Status: string;
  Summary: string;
};
export const data: dataType[] = [
  { Id: 1, Status: "ToDo", Summary: "This is your first Girl Boss task." },
  { Id: 2, Status: "Started", Summary: "I started doing something." },
  {
    Id: 3,
    Status: "InProgress",
    Summary: "Fixed an issued that was bothering me.",
  },
  { Id: 4, Status: "Started", Summary: "Overwrite this" },
  { Id: 5, Status: "Done", Summary: "This is a completed task." },
  { Id: 6, Status: "ToDo", Summary: "Write your task here." },
];
