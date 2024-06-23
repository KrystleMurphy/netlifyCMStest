import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import * as contentful from 'contentful';

function App() {
  const [count, setCount] = useState(0);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const client = contentful.createClient({
      space: 'yr4wo51w8tqv',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'jO13ziActzoPVJdZJ7TdQPNKuzlY9jfH0J0GHvWpc50',
    });

    client.getEntry('2P6dA4TcUXEkhuNmCUY6Bf')
      .then((entry) => {
        const jsonString = JSON.stringify(entry, null, 2);
        setEntry(entry);
        console.log(entry);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="flex justify-center mt-8">
        {entry ? (
          <div className="max-w-md w-full lg:flex shadow-lg rounded-lg overflow-hidden">
            <div className="flex-none h-48 lg:h-auto lg:w-48 relative">
              {/* <img src={} alt="Headshot" className="w-full h-full object-cover" /> */}
            </div>
            <div className="flex flex-col justify-between p-6 bg-white">
              <div className="flex-1">
                <div className="font-bold text-xl mb-2">{entry.fields.name}</div>
                <p className="text-gray-700 text-base">{entry.fields.bio.content[0].content[0].value}</p>
              </div>
              <div className="mt-4">
                <a href={entry.fields.linkedInUrl.content[0].content[0].value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>


    </>
  );
}

export default App;
