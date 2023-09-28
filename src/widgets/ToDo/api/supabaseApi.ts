import { supabase } from "@/app/providers/supabase";

export const getTasks = async () => {
  const { data } = await supabase.from("Tasks").select("*").order("isDone", {
    ascending: true,
  });
  console.log(data);
  return data;
};

export const addTask = async (taskName: string) => {
  const { data } = await supabase
    .from("Tasks")
    .insert([{ name: taskName, isDone: false }]);
  return data;
};

export const deleteTask = async (taskId: number) => {
  const { error } = await supabase.from("Tasks").delete().eq("id", taskId);

  return error;
};

export const toggleTaskDone = async (taskId: number) => {
  const { data } = await supabase.rpc("toggle_task_is_done", {
    row_id: taskId,
  });

  return data;
};

export const editTaskName = async (taskId: number, newTaskName: string) => {
  const { data } = await supabase
    .from("Tasks")
    .update({ name: newTaskName })
    .eq("id", taskId);

  return data;
};
