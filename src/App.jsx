import { useState } from "react";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => {
    setRefresh(true);
  };

  return (
    <div className="text-center text-2xl font-bold mt-10">Hello from Vite</div>
  );
};

export default App;
