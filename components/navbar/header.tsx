import React from "react";
import Container from "../container";
import UserMenu from "./user-menu";
import Logo from "./logo";
import UserButton from "./user-button";

const Header = () => {
  return (
    <div className="py-5 bg-primary fixed w-full border-b border-gray-500">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-20">
          <UserMenu />
          <UserButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
