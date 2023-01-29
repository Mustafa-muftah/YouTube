import "./Spinner.scss"

const Spinner:React.FC = () => {
  const spin = Array.from({ length: 10 }, (v, i) => i);
  return (
    <div className="spinner-container" data-testid="loading-spinner">
      {spin.map((s, index) => (
        <div className="container" key={index}>
          <div className="circle"></div>
        </div>
      ))}
               <span>Loading...</span>
    </div>
  );
};

export default Spinner;
