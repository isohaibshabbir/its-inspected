import styled from 'styled-components';

const StyledDashedLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px dashed #ccc;
  margin: 16px 0;
`;

const DashedLine = ({ style }) => {
    return <StyledDashedLine style={style} />;
};

export default DashedLine;