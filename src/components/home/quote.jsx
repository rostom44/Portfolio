import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMdRefresh } from "react-icons/io";
import axios from "axios";
import "./home.css";

export default function Quote() {
  const { t } = useTranslation();
  const [quote, setQuote] = useState(null);
  const [refresh, setRefresh] = useState(false);

  // Function to fetch a new quote
  const fetchQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data);
        setRefresh(true); // Trigger progress bar animation reset
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch a new quote when the component mounts
    fetchQuote();

    // Set up an interval to fetch a new quote every 18 seconds
    const intervalId = setInterval(fetchQuote, 18000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (refresh) {
      // Trigger progress bar animation reset
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="box-container">
      <div className="quote-header">
        <h2>{t("home.translate-quote")}</h2>
        <button className="refresh" onClick={fetchQuote}>
          <IoMdRefresh />
        </button>
      </div>

      {quote ? (
        <blockquote className="quote">
          <span>{quote.content}</span>
          <br />
          <cite>-{quote.author}-</cite>
        </blockquote>
      ) : (
        "Loading..."
      )}

      <div
        className="progress-bar"
        key={refresh ? "active" : "inactive"} // Key to trigger re-render
      />
    </div>
  );
}
