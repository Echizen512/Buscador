import { useState } from 'react';
import loaderImage from './icons/PhSpinnerLight.svg';
import Form from './components/Form';
import Card from './components/Card';


export default function App() {
  const [number, setNumber] = useState(); //null
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("Hola chiamo")

  return (
    <main className="bg-slate-200 h-screen flex flex-col gap-2">
      <h1 className="text-center font-bold text-4xl mt-5">
        Buscador de Usuarios
      </h1>
      <Form
        number={number}
        setNumber={setNumber}
        setData={setData}
        setIsLoading={setIsLoading}
      />
      {data.length === 0 ? (
        <h2 className="text-3xl font-bold text-center mt-40">
          Aún no hay usuarios
        </h2>
      ) : isLoading ? (
        <section className="flex justify-center items-center mt-44">
          <img
            src={loaderImage}
            alt="Cargando..."
            className="animate-spin"
            width={'100px'}
            height={'100px'}
          />
        </section>
      ) : (
        <section className="grid grid-cols-4 lg:grid-cols-6 gap-2 mt-5 px-2">
          <Card data={data} />
        </section>
      )}
    </main>
  );
}
