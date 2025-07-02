import { useCallback, useState } from "react";

export default function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState();
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass= str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 
text-orange-500"
      >
        <h1 className="text-white text-center">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-8 my-3">
          <input
           type="text"
            value={password} 
            className="outline-none w-full py-1 px-3"
            placeholder="Password" 
            readOnly 
            /> 
            <button className="bg-blue-500 text-white px-3">Copy</button>
        </div>
      </div>
    </>
  );
}
