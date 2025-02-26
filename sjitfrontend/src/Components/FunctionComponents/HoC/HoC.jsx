import Button from "./Button";
import tackingMyButtonComp from "./tackingMyButtonComp";

const HoC = () => {
  const ButtonTrack = tackingMyButtonComp(Button);
  return (
    <div>
      <h1>Welcome to Higher Order Components(HoC)</h1>
      {/* <Button value={"Login"} /> */}
      <ButtonTrack
        value={"Login"}
        trackingInfo={{ custID: "Hello", Password: "password" }}
      />
    </div>
  );
};

export default HoC;
