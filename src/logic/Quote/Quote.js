import QUOTES from './Quotes-data';
import './QuoteStyles.css';

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