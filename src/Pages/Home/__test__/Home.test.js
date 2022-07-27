import React from "react";
import { render, screen } from "@testing-library/react";
//import { MemoryRouter } from 'react-router-dom';
import Home from "../Home";

test("Render Home page text render", () => {
	render(<Home />);
	const mainText = screen.getByRole("heading");

	expect(mainText.textContent).toBe("Hi! I am Billy, Full stack Web Developer at Terabyte");
})
