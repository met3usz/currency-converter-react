import './style.css';

const Result = ({ result }) => {
  return (
    <div className="result">
      <>
        <p className="result__paragraph">
          Kwota po przeliczeniu: <span className="result__span">{result}</span>{' '}
          PLN
        </p>
      </>
    </div>
  );
};

export default Result;
