import { lazy, Suspense, useState } from "react";
// import LineChart from "./LineChart";

const LineChart = lazy(() => import("./LineChart"));

export default function CompanySales() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShown((prev) => !prev);
        }}
      >
        Show Company Sales
      </button>
      {shown && (
        <Suspense fallback={<div>loading...</div>}>
          <LineChart data={data} xKey={"month"} yKeys={["sales"]} />
        </Suspense>
      )}
      {/* {shown && <LineChart data={data} xKey={"month"} yKeys={["sales"]} />} */}
    </>
  );
}
const data: { month: string; sales: number }[] = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 300 },
  { month: "Apr", sales: 400 },
  { month: "May", sales: 500 },
  { month: "Jun", sales: 600 },
  { month: "Jul", sales: 700 },
  { month: "Aug", sales: 800 },
  { month: "Sep", sales: 900 },
  { month: "Oct", sales: 1000 },
  { month: "Nov", sales: 1100 },
  { month: "Dec", sales: 1200 },
];

//Lazy 사용 시 성능최적화에 도움을 줄 수 있음 (155Kb -> 55Kb 실험 상 약 1/3로 감소) 사용자는 애플리케이션과 더 빠르게 상호작용 할 수 있음.
