/* eslint-disable react/react-in-jsx-scope */
import QUOTES from './Quote-data';
import './Quote.style.css';

const Quote = () => {
  const [quote, author] = QUOTES[Math.floor(Math.random() * (QUOTES.length))].split('–');
  return (
    <blockquote id="quote">
      {quote}
      <span>{`- ${author}`}</span>
    </blockquote>
  );
};

export default Quote;
