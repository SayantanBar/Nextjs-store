import { Input } from "../ui/input";
export default function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="search products"
      className="max-w-sm dark:bg-muted"
    />
  );
}
