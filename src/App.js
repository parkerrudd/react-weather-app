import React from 'react'; 
const api = {
  key: '81f0db3489f2d58ca49d1b97febd0332', 
  base: 'https://api.openweathermap.org/data/2.5'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input 
            type="text"
            className='search-bar'
            placeholder='Search...'/>
        </div>
      </main>
    </div>
  );
}

export default App;
