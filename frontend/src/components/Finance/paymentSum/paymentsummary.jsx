import "./paymentsummarycss.css";
import { Link } from "react-router-dom";

function payment_Sum(props) {
  return (
    <div className="full">
      <h1 className="sum">Payment Summary</h1>
      <div className="btnset">
        <Link to={"/payment/pendinglist"}>
          <button type="submit" className="BtnType ear">
            <h1>PENDING</h1>
          </button>
        </Link>
        <Link to={"/payment/earnings"}>
          <button type="submit" className="BtnType out">
            <h1>EARNINGS</h1>
          </button>
        </Link>
        <Link to={"/payment/outgoings"}>
          <button type="submit" className="BtnType out">
            <h1>OUTGOINGS</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default payment_Sum;
