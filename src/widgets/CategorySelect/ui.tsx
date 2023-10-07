import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Creatable from "react-select/creatable";
import { addNewCategory, getAllCategories } from "./api/supabaseApi";
import { Box } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { CustomOption } from "./components/CustomOption";

const queryKey = "categories";

export const CategorySelect = ({
  control,
  isMulti = false,
}: {
  control: FieldValues | any;
  isMulti?: boolean;
}) => {
  const queryClient = useQueryClient();

  const { data: categoriesData } = useQuery({
    queryFn: getAllCategories,
    queryKey: [queryKey],
  });

  const categoriesMutation = useMutation({
    mutationFn: (inputValue: string) => {
      const value = inputValue.toLowerCase();
      return addNewCategory(inputValue, value);
    },
    mutationKey: [queryKey],
    onSuccess: () => queryClient.invalidateQueries([queryKey]),
  });

  // const customOption = ({ value, label }: { value: string; label: string }) => {
  //   <Box display={"flex"} justifyContent={"space-between"}>
  //     <Typography>{label}</Typography>
  //     <Tooltip title="delete">
  //       <IconButton>
  //         <ClearIcon />
  //       </IconButton>
  //     </Tooltip>
  //   </Box>;
  // };

  return (
    <Box width={"200px"}>
      {categoriesData && (
        <Controller
          name="category"
          control={control}
          render={(field) => (
            <Creatable
              onChange={field.field.onChange}
              onBlur={field.field.onBlur}
              ref={field.field.ref}
              value={field.field.value}
              name={field.field.name}
              options={categoriesData}
              components={{ Option: CustomOption }}
              isMulti={isMulti}
              onCreateOption={(inputValue) =>
                categoriesMutation.mutate(inputValue)
              }
            />
          )}
        />
      )}
    </Box>
  );
};
