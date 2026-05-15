import GreatJob from '../assets/greatjob1.png';
function EndScreen({ stars }) {
  return (
    <div className="screen">

      <div className="end-box">
        <img src={GreatJob} alt="Great Job!" className="end-image" />
       </div>

    </div>
  );
}

export default EndScreen;