import React from "react";
import "./styles.css";
import { useState } from "react";

const stateDB = {
  Himachal: [
    {
      name: "Chamba",
      rating: "4/5",
      Detail:
        "Chamba, perhaps the loveliest valley of Himachal, is a treasure trove of scenic attractions, sparkling streams, primeval lakes, meadows, dense alpine tree covers, rich wildlife and fertile valleys. At the crossroads of Dhauladhar and Zanskar ranges, the region borders Jammu & Kashmir and is the northernmost district of the state. Fast flowing streams drain into River Ravi on the southern side and into River Chenab on the northern fringes."
    },
    {
      name: "Manali",
      rating: "3.5/5",
      Detail:
        "A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious climate."
    }
  ],

  Punjab: [
    {
      name: "Chandigarh",
      rating: "5/5",
      Detail:
        "Chandigarh, the dream city of India's first Prime Minister, Sh. Jawahar Lal Nehru, was planned by the famous French architect Le Corbusier. Picturesquely located at the foothills of Shivaliks, it is known as one of the best experiments in urban planning and modern architecture in the twentieth century in India"
    },
    {
      name: "Amritsar",
      rating: "4.5/5",
      Detail:
        "Amritsar has been chosen as one of the heritage cities for HRIDAY - Heritage City Development and Augmentation Yojana scheme of Government of India. Amritsar is home to Harmandir Sahib, popularly known as the Golden Temple, one of Sikhism's most spiritually significant and most-visited gurudwaras. The city is also known for its wooden chessboards and chess pieces manufacturing industry."
    }
  ],
  Uttarakhand: [
    {
      name: "Nainital",
      rating: "3.5/5",
      Detail:
        "Commonly known as the “Lake District of India”, Nainital is one of the most beautiful hill stations in North India. Surrounded by mountains on three sides Nainital is located around the beautiful lake Naini Tal. This lake resort is situated at a height of 1,938 meters."
    },
    {
      name: "Dehradun",
      rating: "5/5",
      Detail:
        "Nestled in the mountain ranges of the Himalayas, Dehradun is one of the most beautiful cities in the sub mountain tracks of India, known for its scenic surroundings. The name Dehradun is a collection of two words “dera” meaning camp and “dun” meaning valley."
    }
  ]
};

export default function App() {
  const [selectedState, setState] = useState("Uttarakhand");
  function stateClickHandler(state) {
    setState(state);
  }
  return (
    <div className="App">
      <h1>Must visit places of North India</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout some best place to visit in North India. Just select the state
        and see some good suggestions.
      </p>

      <div>
        {Object.keys(stateDB).map((state) => (
          <button
            onClick={() => stateClickHandler(state)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {state}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {stateDB[selectedState].map((state) => (
            <li
              key={state.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>
                {" "}
                {state.name}{" "}
                <div style={{ fontSize: "smaller" }}> {state.rating} </div>
              </div>
              <div> {state.Detail} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
