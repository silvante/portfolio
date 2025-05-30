import React from "react";
import { articles } from "../data";
import At from "../components/At";

const Articles = () => {
  const re_articles = [...articles].reverse()
  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-semibold">Articles</h2>
        <p>short phylosophy</p>
      </div>
      <div className="w-full py-5 space-y-5">
        {re_articles.map((ar) => {
          return (
            <div key={ar.id} className="space-y-3">
              <At text={ar.at} />
              <p className="text-white/70">published at {ar.published_at}</p>
              <h2 className="text-lg font-semibold">{ar.title}</h2>
              <p>{ar.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
