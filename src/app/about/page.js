"use client";

import Image from "next/image";

export default function About() {

  return (
    <main className="container mx-auto p-4 flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold">Augusto Lupo</h1>
      <p className="text-center max-w-x3">
        Soy estudiante de diseño multimedial. Naci el 22-04-2003. Trabajo como realizador audiovisual, mas a la parte de realizacion de streaming en dos empresas: showThisNow y El Trece Tv
      </p>

      <a
        href="https://www.linkedin.com/in/augusto-lupo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Mi LinkedIn
      </a>
    </main>
  );
}

