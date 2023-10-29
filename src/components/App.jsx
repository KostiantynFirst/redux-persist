import { useSelector, useDispatch } from "react-redux";
import { update } from "redux/valueSlice";

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.clicks.value)
  return (
    <div>
      <button type="button" onClick={() => dispatch(update())}>Number of clicks: {numberOfClicks}</button>
    </div>
  );
};
