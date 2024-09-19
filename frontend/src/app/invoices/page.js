import Navbar from "../components/navbar";
import FindTransaction from "../section/trackTransaction";

export default function TransactionCheck() {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        <FindTransaction />
      </div>
    </div>
  );
}
