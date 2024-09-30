import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Gradiente de fundo animado
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(270deg, #ff6f61, #6a1b9a, #2196f3, #ffeb3b);
  background-size: 800% 800%;
  animation: ${gradientAnimation} 10s ease infinite;
  font-family: 'Arial', sans-serif;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 40px;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 64, 129, 0.5);
  }

  &:active {
    transform: scale(1);
  }
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  height: 30px;
  background-color: #fff;
  border-radius: 15px;
  margin: 30px 0;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #03a9f4;
  border-radius: 15px 0 0 15px;
  transition: width 0.5s ease-in-out;
`;

const TestPage = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    const newProgress = progress < 100 ? progress + 10 : 0;
    setProgress(newProgress);
  };

  return (
    <Container>
      <Title>Boa Ação </Title>
      <Subtitle>Hub Para doações </Subtitle>
      <Button onClick={handleButtonClick}>Clique Aqui</Button>
      <ProgressBarContainer>
        <ProgressBarFill style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
    </Container>
  );
};

export default TestPage;
