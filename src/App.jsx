import { useState } from "react";

import "./App.css";

function App() {
  const [expanded, setExpanded] = useState(null); // Track expanded state

  const toggleExpansion = (boxId) => {
    setExpanded(expanded === boxId ? null : boxId);
  };
  const handleSelectClick = (event) => {
    event.stopPropagation();
    console.log("Select clicked");
  };

  return (
    <div className="container">
      <div className="bogo-banner">
        <hr className="line" />
        <h1 className="bogo-text">YAY! It’s BOGO</h1>
        <hr className="line" />
      </div>
      <div
        className={`price-box ${expanded === 1 ? "expanded" : ""}`}
        onClick={() => toggleExpansion(1)}
      >
        <div className="flex justify-between mt-16">
          <div className="left-section">
            <label className="custom-radio">
              <input type="radio" name="radio" />
              <span className="radio-circle"></span>
            </label>
            <div className="text-content">
              <div className="title">
                <span className="f-14 fw-600">1 Unit</span>
                <span className="discount-badge">10% Off</span>
              </div>
              <div className="subtitle">Standard Price</div>
            </div>
          </div>
          <div className="right-section">
            <div className="current-price">$10.00 USD</div>
            <div className="original-price">$24.00 USD</div>
          </div>
        </div>
        {expanded === 1 && (
          <div className="expand-content">
            <div>
              <div>
                <label style={{ marginLeft: "26px" }}>Size</label>
                <div className="flex gap-10">
                  <span>#1</span>
                  <select onClick={handleSelectClick}>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <span>#2</span>
                <select onClick={handleSelectClick}>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label>Colour</label>
                <div className="flex gap-10">
                  <select onClick={handleSelectClick}>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>White</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <select onClick={handleSelectClick}>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>White</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`price-box mt-16 ${expanded === 2 ? "expanded" : ""}`}
        onClick={() => toggleExpansion(2)}
      >
        <div className="flex justify-between mt-16 relative">
          <div className="most-popular-badge"></div>
          <div className="most-popular-text">MOST POPULAR</div>
          <div className="left-section">
            <label className="custom-radio mt-10">
              <input type="radio" name="radio" />
              <span className="radio-circle"></span>
            </label>
            <div className="text-content">
              <div className="title">
                <span className="f-14 fw-600">2 Unit</span>
                <span className="discount-badge">20% Off</span>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="current-price">$18.00 USD</div>
            <div className="original-price">$24.00 USD</div>
          </div>
        </div>
        {expanded === 2 && (
          <div className="expand-content">
            <div>
              <div>
                <label style={{ marginLeft: "26px" }}>Size</label>
                <div className="flex gap-10">
                  <span>#1</span>
                  <select onClick={handleSelectClick}>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <span>#2</span>
                <select onClick={handleSelectClick}>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label>Colour</label>
                <div className="flex gap-10">
                  <select onClick={handleSelectClick}>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>White</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <select onClick={handleSelectClick}>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>White</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`price-box mt-16 ${expanded === 3 ? "expanded" : ""}`}
        onClick={() => toggleExpansion(3)}
      >
        <div className="flex justify-between mt-16">
          <div className="left-section">
            <label className="custom-radio mt-10">
              <input type="radio" name="radio" />
              <span className="radio-circle"></span>
            </label>
            <div className="text-content">
              <div className="title">
                <span className="f-14 fw-600">3 Unit</span>
                <span className="discount-badge -mt-15">30% Off</span>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="current-price">$24.00 USD</div>
            <div className="original-price">$24.00 USD</div>
          </div>
        </div>
        {expanded === 3 && (
          <div className="expand-content">
            <div>
              <div>
                <label style={{ marginLeft: "26px" }}>Size</label>
                <div className="flex gap-10">
                  <span>#1</span>
                  <select onClick={handleSelectClick}>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <span>#2</span>
                <select onClick={handleSelectClick}>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label>Colour</label>
                <div className="flex gap-10">
                  <select onClick={handleSelectClick}>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>White</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <select onClick={handleSelectClick}>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>White</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-16">
        <span style={{ color: "#FF6B82" }} className="fs-14 fw-500">
          Free Delivery
        </span>
        <span className="fs-14 fw-500">Total : $18.00 USD</span>
      </div>
      <div className="mt-16 add-cart">+ Add to Cart</div>
    </div>
  );
}

export default App;
