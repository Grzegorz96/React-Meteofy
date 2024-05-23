import { NotFoundWrapper, LinkStyled, Title } from "./NotFound.styles";

export default function NotFound() {
    return (
        <NotFoundWrapper>
            <Title>404 - Not Found!</Title>
            <LinkStyled to="/">Go to Home</LinkStyled>
        </NotFoundWrapper>
    );
}
