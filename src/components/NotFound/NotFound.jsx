import { NotFoundWrapper, LinkStyled, Title } from "./NotFound.styles";

/**
 * @component
 * Renders the NotFound component.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
    return (
        <NotFoundWrapper>
            <Title>404 - Not Found!</Title>
            <LinkStyled to="/">Go to Home</LinkStyled>
        </NotFoundWrapper>
    );
}
