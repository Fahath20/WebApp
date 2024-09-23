import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { RootState } from "../store/store";
import { removeHabit, toggleHabit } from "../store/habit-slice";

const HabitList = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body">{habit.frequency}</Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    onClick={() => 
                        dispatch(toggleHabit({id: habit.id, date: today}))
                    }
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => 
                        dispatch(removeHabit({id: habit.id}))
                    }
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
