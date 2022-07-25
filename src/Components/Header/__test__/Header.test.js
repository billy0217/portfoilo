import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Header from "../Header";

test("should navigate to about page when about nav link is clicked", () => {
	render(<MemoryRouter><Header /></MemoryRouter>);
	const aboutLink = screen.getByRole('link', { name: 'About' });

	expect(aboutLink).toHaveAttribute('href', '/about');
});

test("should navigate to work page when work nav link is clicked", () => {
	render(<MemoryRouter><Header /></MemoryRouter>);
	const aboutLink = screen.getByRole('link', { name: 'Work' });

	expect(aboutLink).toHaveAttribute('href', '/work');
});