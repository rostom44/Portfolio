import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

export default function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data); // Assuming the quote is in the data property of the response
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="box-container">
      {quote ? (
        <blockquote>
          {quote.content}
          <br />
          <cite>-{quote.author}-</cite>
        </blockquote>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
