import { BookmarkRemainder } from "../components/BookmarkRemainder";
import { Header } from "../components/Header";

export function SoldierView() {
  return (
    <div className="flex flex-col">
      <Header />
      <BookmarkRemainder />
      <div>SoldierView</div>
    </div>
  );
}
