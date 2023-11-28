import StockCardHeader from "./ui/stock-card/stock-card-header";
import StockCardItem from "./ui/stock-card/stock-card-item";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-5 text-lines font-sans">
      <div>  <StockCardHeader />
        <StockCardItem />
        <StockCardItem />
        <StockCardItem />
        <StockCardItem />
      </div>
    </main>
  )
}
