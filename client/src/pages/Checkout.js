import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

function Checkout() {
  const [tab, handleTab] = React.useState();

  return (
    <section>
      <TopSection>
        <div>
          <AiOutlineClose className="top-icon" />
          <h1>
            <strong>Checkout</strong>
          </h1>
        </div>
      </TopSection>
      <MiddleSection>
        <p>Cart</p>
        <p>Contact</p>
        <p>Payment</p>
        <p>Summary</p>
      </MiddleSection>

      <BottomSection>
        <div className="emty">
          <p>
            There is nothing <br /> to checkout <br /> here!
          </p>
        </div>
        <a href="#"> place your order now! </a>
      </BottomSection>
    </section>
  );
}

const TopSection = styled.div`
  width: 100%;
  margin-left: 40px;
  display: flex;
  gap: 14px;
  div {
    display: flex;
    gap: 22px;
    align-items: center;
    justify-content: center;
    .top-icon {
      font-size: 1.8rem;
      border: 1px solid #000;
      text-align: center;
      border-radius: 5px;
      margin-left: 25px;
    }
    h1 {
      font-size: 2rem;
      font-family: "Montserrat";
      font-weight: 900;
    }
  }
`;

const MiddleSection = styled.div`
  background-color: #eee;
  display: flex;
  gap: 14px;
  justify-content: center;
  p {
    color: #9c9c9c;
  }
  p:hover {
    border: 1px solid #ed1c00;
    border-radius: 8px;
    background: #ed1c00;
    color: #fff;
    padding: 0 6px;
    font-family: "Montserrat";
    transition: 0.2s;
    cursor: pointer;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .emty {
    text-align: center;
    width: 400px;
    margin-bottom: 4rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    padding: 12px 42px;
    border: 1px solid #ed1c00;
    background-color: #ed1c00;
    border-radius: 8px;
    color: #fff;
    font-family: "Montserrat";
  }
`;

export default Checkout;
