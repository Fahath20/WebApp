import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./component/add-habit-form";
import HabitList from "./component/habit-list";

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">Habit Tracker</Typography>
        <AddHabitForm/>
        <HabitList/>
      </Container>
    </Provider>
    
  )
}

export default App
