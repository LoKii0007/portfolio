import React, { useEffect, useState } from "react";

const Preloader = ({ assets, onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  const preloadAssets = (assets) => {
    return Promise.all(
      assets.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = process.env.PUBLIC_URL + src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  useEffect(() => {
    preloadAssets(assets)
      .then(() => {
        setLoading(false);
        onLoadingComplete();
      })
      .catch((error) => console.error("Error loading assets:", error));
  }, [assets, onLoadingComplete]);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>Loading...</h1>
        </div>
      ) : null}
    </>
  );
};

export default Preloader;
