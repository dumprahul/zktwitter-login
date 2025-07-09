"use client";

import { useCallback, useState } from "react";
import verify from "../zkconnect";

export default function Home() {
  const [proofs, setProofs] = useState<any>(null); // fix linter error
  const [modalOpen, setModalOpen] = useState(false);

  const handleConnect = useCallback(async () => {
    const result = await verify();
    setProofs(result);
  }, []);

  const handleShowProofs = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <main className="flex flex-col items-center w-full max-w-md mx-auto p-8 rounded-xl shadow-lg border border-gray-200 bg-white">
        <h1 className="text-3xl text-black font-bold text-center mb-10 tracking-tight">Twitter login using zk</h1>
        <div className="flex flex-row gap-4 mb-8 w-full justify-center">
          <button
            className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow transition-colors text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            onClick={handleConnect}
          >
            Connect
          </button>
          {proofs && (
            <button
              className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow transition-colors text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              onClick={handleShowProofs}
            >
              Show Proofs
            </button>
          )}
        </div>
        {/* Optionally, you can add a description or instructions here */}
      </main>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl relative border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-center">Proofs</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-xs max-h-96 text-black border border-gray-200">
              {JSON.stringify(proofs, null, 2)}
            </pre>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl font-bold focus:outline-none"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
