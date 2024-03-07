import React, { useEffect, useState } from "react";
import "../css/Elevator.css";
const Elevator = () => {
  let [level1, setLevel1] = useState(0);
  let [level2, setLevel2] = useState(5);
  let [level3, setLevel3] = useState(10);
  let [DestValue1, setDestValue1] = useState(0);
  let [DestValue2, setDestValue2] = useState(5);
  let [DestValue3, setDestValue3] = useState(10);
  let [floor, setFloor] = useState(0);
  function handleUp1() {
    console.log("Moving up - Elevator-01");
    GoingUp(level1, setLevel1, floor);
    
  }
  function handleUp2() {
    console.log("Moving up - Elevator-02");
    GoingUp(level2, setLevel2, floor);
  }
  function handleUp3() {
    console.log("Moving up - Elevator-03");
    GoingUp(level3, setLevel3, floor);
  }
  function handleDown1() {
    console.log("Moving down - Elevator-01");
    GoingDown(level1, setLevel1, floor);
  }
  function handleDown2() {
    console.log("Moving down - Elevator-02");
    GoingDown(level2, setLevel2, floor);
  }
  function handleDown3() {
    console.log("Moving down - Elevator-03");
    GoingDown(level3, setLevel3, floor);
  }
  function handleFloor(e) {
    const value = Number(e.target.value);
    console.log(value);
    setFloor(value);
  }



  useEffect(() => {
    if (floor !== level1) {
      const item = document.getElementsByName("elevator1-input")[0];

      item.disabled = true;
    }
    if (floor !== level2) {
      const item = document.getElementsByName("elevator2-input")[0];

      item.disabled = true;
    }
    if (floor !== level3) {
      const item = document.getElementsByName("elevator3-input")[0];

      item.disabled = true;
    }
    if (floor === level1) {
      const item = document.getElementsByName("elevator1-input")[0];
      item.disabled = false;
    }
    if (floor === level2) {
      const item = document.getElementsByName("elevator2-input")[0];
      item.disabled = false;
    }
    if (floor === level3) {
      const item = document.getElementsByName("elevator3-input")[0];
      item.disabled = false;
    }
  }, [floor,level1,level2,level3]);

  useEffect(()=>{
    if(DestValue1>level1)
    GoingUp(level1,setLevel1,DestValue1);
    else
    GoingDown(level1,setLevel1,DestValue1);
  },[DestValue1]);
  useEffect(()=>{
    if(DestValue2>level2)
    GoingUp(level2,setLevel2,DestValue2);
    else
    GoingDown(level2,setLevel2,DestValue2);
  },[DestValue2]);
  useEffect(()=>{
    if(DestValue3>level3)
    GoingUp(level3,setLevel3,DestValue3);
    else
    GoingDown(level3,setLevel3,DestValue3);
  },[DestValue3]);


  function handleElevator1Input(e) {
    let DestValue = Number(e.target.value);
    setDestValue1(DestValue);
  }
  function handleElevator2Input(e) {
    let DestValue = Number(e.target.value);
    setDestValue2(DestValue);
  }
  function handleElevator3Input(e) {
    let DestValue = Number(e.target.value);
    setDestValue3(DestValue);
  }

  function GoingUp(level, setLevel, DestValue) {
    const intervalId = setInterval(() => {
      if (level === DestValue || level<0 || level>10) {
        clearInterval(intervalId);
        console.log("Reached Destination floor");
        
      } else {
        setLevel(++level);
      }
    }, 2000); // 2 seconds interval
  }
  function GoingDown(level, setLevel, DestValue) {
    const intervalId = setInterval(() => {
      console.log(level, DestValue);
      if (level === DestValue || level<0 || level>10) {
        clearInterval(intervalId);
        console.log("Reached Destination floor");
        
      } else {
        setLevel(--level);
      }
    }, 2000); // 2 seconds interval
  }

  useEffect(() => {
    document.getElementsByClassName("screen-box").innerText = level1;
  }, [level1]);

  return (
    <div className="main-container">
      <div className="floor">
        <p style={{fontSize:25,fontWeight:600}}>
            ELEVATOR
            SYSTEM
        </p>
        <h6>Time taken to traverse each floor is 2 sec</h6>
        <h3>Floor:</h3>
        <input
          type="number"
          name="floor"
          min={0}
          max={10}
          onChange={handleFloor}
          className="floor-screen"
        />
      </div>
      <div className="main-elevator">
        <div className="inside-main-elevator1">
          <input
            type="number"
            min={0}
            max={10}
            placeholder="0"
            className="elevator-input"
            name="elevator1-input"
            onChange={handleElevator1Input}
          ></input>
        </div>
        <div className="inside-main-elevator2"></div>
        <div className="screen">
          <div className="screen-box">{level1}</div>
          <div className="directions">
            <div className="up">
              <img
                src="./arrow-up.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleUp1}
              />
            </div>
            <div className="down">
              <img
                src="./down.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleDown1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-elevator">
        <div className="inside-main-elevator1">
          <input
            type="number"
            min={0}
            max={10}
            placeholder="0"
            className="elevator-input"
            name="elevator2-input"
            onChange={handleElevator2Input}
          ></input>
        </div>
        <div className="inside-main-elevator2"></div>
        <div className="screen">
          <div className="screen-box">{level2}</div>
          <div className="directions">
            <div className="up">
              <img
                src="./arrow-up.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleUp2}
              />
            </div>
            <div className="down">
              <img
                src="./down.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleDown2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-elevator">
        <div className="inside-main-elevator1">
          <input
            type="number"
            min={0}
            max={10}
            placeholder="0"
            className="elevator-input"
            name="elevator3-input"
            onChange={handleElevator3Input}
          ></input>
        </div>
        <div className="inside-main-elevator2"></div>
        <div className="screen">
          <div className="screen-box">{level3}</div>
          <div className="directions">
            <div className="up">
              <img
                src="./arrow-up.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleUp3}
              />
            </div>
            <div className="down">
              <img
                src="./down.png"
                alt=""
                srcset=""
                width={40}
                height={40}
                onClick={handleDown3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevator;
