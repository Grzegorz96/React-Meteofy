import styled from "styled-components";

export const CurrentAirPollutionWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    position: relative;
`;

export const CurrentAirPollutionChart = styled.div`
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 0px 20px 20px 20px;
`;

export const Datetime = styled.p`
    position: absolute;
    margin-top: 3px;
    font-size: 10px;
    font-weight: 600;
    color: #888;
`;

export const AirQualityIndex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.dark.text};
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    border-radius: 6px;
    width: 300px;
`;

export const AirQualityIndexHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    align-items: center;
    padding: 10px 0;
    background-color: ${(props) => props.$backqroundColor};
    border-radius: 6px 6px 0 0;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
`;

export const FaceImg = styled.img.attrs((props) => ({
    src: `/assets/airPollutionIcons/${props.$icon}.svg`,
}))`
    width: 80px;
    height: 80px;
`;

export const Label = styled.div`
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    color: #000000;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AirQualityIndexDescription = styled.div`
    padding: 15px;
    font-size: 16px;
    text-align: center;
`;

export const ErrorInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-inline: 20px;
    text-align: center;
`;

export const AirQualityIndexFooter = styled.div`
    display: grid;
    gap: 5px;
    padding-top: 5px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.dark.text};
    border-radius: 0 0 6px 6px;
`;

export const FaceFooter = styled.img.attrs((props) => ({
    src: `/assets/airPollutionIcons/${props.$icon}.svg`,
}))`
    width: 40px;
    height: 40px;
    padding: 1px;
    border-radius: 50%;
    background-color: ${(props) => props.$backqroundColor};
    margin: auto;
`;

export const FaceFooterDescription = styled.div`
    font-size: 10px;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
