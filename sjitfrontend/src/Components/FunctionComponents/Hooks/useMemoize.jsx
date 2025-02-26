import useMemoizeHook from "./CustomHooks/MemorizingHook";

const UseMemoize = () => {
  var [custID, setCustID] = useMemoizeHook("CustomerID", "");
  var [pass, setPass] = useMemoizeHook("Password", "");

  const handleEvent = () => {
    localStorage.removeItem("CustomerId")
    localStorage.removeItem("Password")
  }

  return (
    <div>
      <h1>This is a custom hook designed using useState</h1>
      CustomerID : {" "}
      <input
        type="text"
        value={custID}
        onChange={(e) => setCustID(e.target.value)}
      />
      <br />
      Password:{" "}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button formAction={handleEvent}>Login</button>
    </div>
  );
};

export default UseMemoize;
