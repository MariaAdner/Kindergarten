import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";

const StyledMenu = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 10px;
  margin: 10px;
`;

const StyledMenuLink = styled.li`
  width: 300px;
  height: 100px;
  background-color: lightgreen;
  padding: 35px;
  border-radius: 20px;
  font-weight: bold;
  font-size: larger;
  border: 20px, solid, black;
  margin: 10px;
`;

export default function Home() {
  return (
    <div>
      <h1>Herzlich Willkommen bei der Kita Sternschnuppe in Dorfchemnitz</h1>
      <StyledMenu>
        <StyledMenuLink>
          <Link href="/Neuigkeiten">Neuigkeiten</Link>
        </StyledMenuLink>
        <StyledMenuLink>
          <Link href="/Termine">Termine</Link>
        </StyledMenuLink>
        <StyledMenuLink>
          <Link href="/Essen">Essen</Link>
        </StyledMenuLink>
      </StyledMenu>
    </div>
  );
}
