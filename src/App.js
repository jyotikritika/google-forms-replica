import "./styles.css";
import { useState } from "react";

export default function App() {
  const [question, setQuestion] = useState("");
  const [quesArr, setQuesArr] = useState([]);
  const [option, setOption] = useState([]);

  function addQuestion() {
    let tempArr = quesArr;
    tempArr.push({ question, type: "multi", options: [] });
    setQuesArr(tempArr);
    setQuestion("");
  }

  function addOption(Questionid) {
    let tempArr = quesArr;
    tempArr.forEach((item, idx) => {
      if (idx === Questionid) {
        item.options.push(option[idx]);
        let oarr = option;
        oarr[idx] = "";
        setOption([...oarr]);
      }
    });
    setQuesArr([...tempArr]);
  }

  return (
    <div className="App">
      <button onClick={addQuestion}>add question</button>
      <input
        type="text"
        value={question}
        onInput={(e) => setQuestion(e.target.value)}
      />
      <div>
        {quesArr.map((item, idx) => (
          <div key={idx}>
            <h3>{item.question}</h3>
            {item.options.map((item, idx) => (
              <div key={item + idx}>
                <input type="checkbox"></input>
                <span>{item}</span>
              </div>
            ))}
            <span>enter option</span>
            <input
              type="text"
              value={option[idx]}
              onInput={(e) => {
                let arr = option;

                if (!arr.length) {
                  arr[idx] = e.target.value;
                } else if (idx >= arr.length) {
                  arr[idx] = e.target.value;
                } else
                  arr.forEach((item, id) => {
                    if (id === idx) {
                      arr[id] = e.target.value;
                    }
                  });
                setOption([...arr]);
              }}
            />
            <button onClick={() => addOption(idx)}>add option</button>
          </div>
        ))}
      </div>
    </div>
  );
}
