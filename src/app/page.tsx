'use client'

import { Button } from "@/components/button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import {  ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {

  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Pag Title</h1>
        </header>

        <section className="my-5">
          <p>Page Content</p>

          <Button label="Click here" onClick={() => {}}/>
        </section>
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
  );
}

export default Page;