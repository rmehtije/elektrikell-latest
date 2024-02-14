import { useSelector } from "react-redux";

export default function Loading() {
  const isLoading = useSelector((state) => state.main.isLoading);
  return isLoading && <h1>LOADING</h1>;
}
