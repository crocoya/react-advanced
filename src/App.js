import React from 'react';

function App() {
  const [timer, setTimer] = React.useState(1);

  React.useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
