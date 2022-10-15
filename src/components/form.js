import React, { useState } from "react";

export default function Form({ sheet, setSheet, sheets, setSheets }) {
  const [inerSheet, setInerSheet] = useState({
    id: "",
    heading: "",
    issuer: "",
    receiver: "",
    copyReceiver: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInerSheet((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const timestamp = () => Date.now();
    
    if (Object.values(inerSheet).every(x => x === '')) {
        alert('❌没东西，不要打印')
        return
    }

    const newSheet = {
      ...inerSheet,
      id: timestamp(),
    };
    setSheet(newSheet);
    setSheets(sheets.concat(newSheet));

    setInerSheet({
        id: "",
        heading: "",
        issuer: "",
        receiver: "",
        copyReceiver: "",
      });
  };

  return (
    <>
      <div className="form-group">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={inerSheet.heading}
            name="heading"
            id=""
            placeholder="标题……"
            onChange={handleChange}
          />
          <input
            type="text"
            value={inerSheet.issuer}
            name="issuer"
            id=""
            placeholder="拟文……"
            onChange={handleChange}
          />
          <input
            type="text"
            value={inerSheet.receiver}
            name="receiver"
            id=""
            placeholder="主送……"
            onChange={handleChange}
          />
          <textarea
            name="copyReceiver"
            value={inerSheet.copyReceiver}
            id=""
            placeholder="抄送……"
            onChange={handleChange}
          >
            
          </textarea>
          <button type="submit">
            打印
          </button>
          <button type="reset">重置</button>
        </form>
      </div>
    </>
  );
}
