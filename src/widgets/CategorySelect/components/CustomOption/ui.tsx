import { IconButton, Stack, Tooltip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { components } from "react-select";
import { ICustomOptionProps } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../api/supabaseApi";
import { useEffect, useState } from "react";

export const CustomOption = ({ children, ...props }: ICustomOptionProps) => {
  const [selected, setSelected] = useState("all");

  const deletionHandler = (value: string) => {
    props.setValue("");
    return deleteCategory(value);
  };

  const queryClient = useQueryClient();

  const optionMutation = useMutation({
    mutationFn: (value: string) => deletionHandler(value),

    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

  const optionValue = props.data.value;
  useEffect(() => {
    setSelected(optionValue);
  }, [optionValue]);

  if (!optionMutation.isLoading) {
    return (
      <components.Option {...props}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {children}
          <Tooltip
            title="delete"
            onClick={() => optionMutation.mutate(selected)}
          >
            <IconButton>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </components.Option>
    );
  }
};
