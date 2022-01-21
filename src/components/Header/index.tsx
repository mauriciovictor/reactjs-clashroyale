import logoImg from "../../assets/img/logo.png";
import { Container, Link } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Clash Royale" />
        <ul>
          <li>
            <Link href="#"> Clans </Link>
          </li>
          <li>
            <Link href="#"> Torneios </Link>
          </li>
          <li>
            <Link href="#"> Torneios globais </Link>
          </li>
          <li>
            <Link href="#" isActive={true}>
              Localizaçãoes
            </Link>
          </li>
          <li>
            <Link href="#"> Cartas </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}
