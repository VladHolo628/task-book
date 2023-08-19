import { ToDo } from "@/widgets/ToDo";
import { useTodoStore } from "@/shared/store/todoStore";
import { WeeklySuccess } from "@/widgets/WeeklySuccess";
import { Box } from "@mui/material";
// const tasksList = [
//   {
//     id: 2132141,
//     name: "Buy some milk",
//     category: "home",
//     priority: "high",
//     done: false,
//     tags: ["food", "home"],
//   },
//   {
//     id: 21688641,
//     name: "Clean my room",
//     category: "home",
//     priority: "low",
//     done: false,
//     tags: ["food", "home"],
//   },
//   {
//     id: 2356141,
//     name: "Apply for  job",
//     category: "home",
//     priority: "high",
//     done: true,
//     tags: ["food", "home"],
//   },
//   {
//     id: 2133211,
//     name: "Cook some dinner",
//     category: "home",
//     priority: "low",
//     done: false,
//     tags: ["food", "home"],
//   },
// ];

export const HomePage = () => {
  const tasks = useTodoStore((state) => state.tasks);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <WeeklySuccess />
      </Box>
      <Box width={"100%"}>
        <ToDo tasks={tasks} />
      </Box>
    </Box>
  );
};
