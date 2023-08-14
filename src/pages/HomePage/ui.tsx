import { ToDo } from "@/widgets/ToDo";
// import { WeeklySuccess } from "@/widgets/WeeklySuccess";
import { Box } from "@mui/material";
const tasksList = [
  {
    id: 2132141,
    name: "Buy some milk",
    category: "home",
    priority: "high",
    done: false,
  },
  {
    id: 21688641,
    name: "Clean my room",
    category: "home",
    priority: "low",
    done: false,
  },
  {
    id: 2356141,
    name: "Apply for  job",
    category: "home",
    priority: "high",
    done: true,
  },
  {
    id: 2133211,
    name: "Cook some dinner",
    category: "home",
    priority: "low",
    done: false,
  },
];

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
      }}
    >
      {/* <WeeklySuccess /> */}
      <ToDo tasks={tasksList} />
      <ToDo tasks={tasksList} />
      <ToDo tasks={tasksList} />
      <ToDo tasks={tasksList} />
    </Box>
  );
};
