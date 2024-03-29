import styled from "styled-components";

export const CurrentWeatherWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.dark.text};
    background-color: ${({ theme }) => theme.dark.primary};
    margin: 20px auto 0 auto;
    padding: 0 20px 20px 20px;
    position: relative;
    /* z-index: -1; */
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.dark.text};
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    line-height: ${(props) => props.$lineHeight};
    letter-spacing: ${(props) => props.$letterSpacing};
    margin: ${(props) => props.$margin};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
`;

export const Wrapper = styled.div`
    display: ${(props) => props.$display};
    align-items: center;
    gap: ${(props) => props.$gap};
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Bottom = styled(Top)``;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `icons/${props.$icon}.png`,
}))`
    width: 100px;
`;

export const Details = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: 20px;
`;

export const ParameterRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const ParameterLabel = styled.span`
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    border-bottom: ${(props) =>
        props.$borderBottom && `1px solid ${props.theme.dark.text}`};
`;

export const ParameterValue = styled(ParameterLabel)`
    text-align: right;
    font-weight: 600;
`;
