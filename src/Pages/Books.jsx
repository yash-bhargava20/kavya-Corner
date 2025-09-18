import React, { useState } from "react";
import { BookOpen, ExternalLink, Search } from "lucide-react";
import Footer from "../Components/Footer";

const Books = () => {
  const [q, setQ] = useState("");

  const books = [
    {
      id: 1,
      title: "Kavita Aviram",
      publisher: "Devprabha Prakashan",
      year: "2020",
      category: "Poetry",
      amazon: "",
      img: "b_1.png",
    },
    {
      id: 2,
      title: "Mook Chikhein ",
      publisher: "Book River Press, Lucknow",
      year: "2019",
      category: "Hindi Poetry",
      amazon:
        "https://www.amazon.in/Mook-Chikhein-Pooja-Singh-Gangania/dp/9388727835",
      img: "b_2.png",
    },
    {
      id: 3,
      title: "Alp-Viram: Ankahe Jazbaat ",
      publisher: "Notion Press Media Pvt. Ltd., Chennai",
      year: "2018",
      category: "Hindi Poetry",
      amazon:
        "https://www.amazon.in/Alp-Viram-Dr-Pooja-Singh-Gangania/dp/164249321X",
      img: "b_3.png",
    },
    {
      id: 4,
      title:
        "Mycobacterial Infections & Female Infertility: Comparative Evaluation of Standard & Molecular Techniques",
      publisher: "LAP LAMBERT Academic Publishing House, Germany",
      category: "Medical / Research",
      amazon:
        "https://www.amazon.com/Mycobacterial-Infections-Female-Infertility-Comparative/dp/6200440379",
      img: "b_4.png",
    },
    {
      id: 5,
      title:
        "Bacterial Isolates & Characterization: Post Surgical Wound Infections",
      publisher: "LAP LAMBERT Academic Publishing House, Germany",
      category: "Medical / Research",
      amazon:
        "https://www.amazon.in/Bacterial-Isolates-Characterization-Surgical-Infections/dp/365926749X",
      img: "b_5.png",
    },
    {
      id: 6,
      title:
        "General Microbiology and Techniques (for undergraduates) — Mahatma Gandhi University, Meghalaya",
      publisher: "Kogent Solutions Inc., Ansari Road, Daryaganj, Delhi",
      category: "Textbook",
      img: "b_6.png",
    },
  ];

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(q.toLowerCase()) ||
      (b.publisher || "").toLowerCase().includes(q.toLowerCase()) ||
      (b.category || "").toLowerCase().includes(q.toLowerCase()) ||
      (b.year || "").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="mt-5 px-3 ">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Books & Publications
            </h1>
            <p className="text-sm text-gray-600">
              Selected academic and literary works by Dr. Pooja Singh Gangania
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <label className="relative block">
            <span className="absolute left-0 top-3 pl-3">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search by title, publisher, category or year..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-3xl py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </label>
        </div>
      </div>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filtered.map((b) => (
            <article
              key={b.id}
              className="relative bg-white/45 border border-gray-200 rounded-lg shadow-sm overflow-hidden h-96 group"
            >
              {b.img && (
                <div className="absolute inset-0">
                  <img
                    src={`/books/${b.img}`}
                    alt={b.title}
                    className="w-full h-full object-cover rounded-md shadow transition-transform duration-700 ease-in-out group-hover:scale-110 origin-top"
                  />
                </div>
              )}

              <div
                className="absolute bottom-0 left-0 right-0 bg-white p-4 transition-all duration-400 ease-in-out 
          opacity-100 group-hover:opacity-0"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Publisher: </span>
                  {b.publisher || "—"}
                </p>
                {b.year && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Year: </span>
                    {b.year}
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Category: </span>
                  {b.category || "—"}
                </p>
              </div>

              <div className="absolute bottom-2 right-4 z-10">
                {b.amazon ? (
                  <a
                    href={b.amazon}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 px-3 py-2 border border-dashed rounded bg-white/70">
                    No external link
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
