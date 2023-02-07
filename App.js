import { Navigator } from "./src/Navigation";
import { StateContextProvider } from "./src/context";

export default function App() {
  return (
    <StateContextProvider>
      <Navigator />
    </StateContextProvider>
  );
}
