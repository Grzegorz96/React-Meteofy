import { NotFoundWrapper, LinkStyled } from "./NotFound.styles";

export default function NotFound() {
    return (
        <NotFoundWrapper>
            <h1>404 - Not Found!</h1>
            <LinkStyled to="/">Go to Home</LinkStyled>
        </NotFoundWrapper>
    );
}
