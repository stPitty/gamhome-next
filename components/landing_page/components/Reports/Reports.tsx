import styled from "styled-components";

const Reports = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>Отзывы</HeaderText>
        <ReportsWrapper>Reports carousel</ReportsWrapper>
      </Container>
    </Wrapper>
  );
};

const ReportsWrapper = styled.div`
  display: flex;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Reports;
