import { useState, useEffect } from "react";
import { useContext } from "react";
import { DeviceContext } from "../../context/deviceContext";
import { useTranslation } from "react-i18next";
import { IoMdRefresh } from "react-icons/io";
import "./home.css";
import quotesData from "../../public/data/quotes.json";

export default function Quote() {
  const { t, i18n } = useTranslation();
  const { deviceType } = useContext(DeviceContext);
  const [quote, setQuote] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Choose the classname based on device type
  const buttonClassName = deviceType === "Phone" ? "refresh-mobile" : "refresh";

  // Function to select a random quote based on the current language
  const fetchQuote = () => {
    const lang = i18n.language; // 'en' or 'fr' based on selected language
    const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    const selectedQuote = quotesData.quotes[randomIndex];

    setQuote({
      content: selectedQuote.content[lang], // Use the content for the current language
      author: selectedQuote.author,
    });
    setRefresh(true); // Trigger progress bar animation reset
  };

  const startTimer = () => {
    const interval = setInterval(fetchQuote, 17000);
    setIntervalId(interval);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    // Fetch a new quote when the component mounts
    fetchQuote();

    // Set up an interval to fetch a new quote every 17 seconds
    const interval = setInterval(fetchQuote, 17000);
    setIntervalId(interval);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Listen for language change and update the quote when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      fetchQuote(); // Re-fetch the quote when the language changes
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup the event listener when component unmounts
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    if (refresh) {
      // Trigger progress bar animation reset
      setRefresh(false);
      stopTimer();
      startTimer();
    }
  }, [refresh]);

  return (
    <div className="box-container">
      <div className="quote-header">
        <h2>{t("home.translate-quote")}</h2>
        <button className={buttonClassName} onClick={fetchQuote}>
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
