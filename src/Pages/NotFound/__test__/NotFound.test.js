import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import NotFound from "../NotFound";

test("Not Found page title should be Page Not Found", () => {
	render(<MemoryRouter><NotFound /></MemoryRouter>);
	const NotFoundText = screen.getByRole("heading");

	expect(NotFoundText.textContent).toBe("Page Not Found");
});

test("should navigate to home page when back to home is clicked", () => {
	render(<MemoryRouter><NotFound /></MemoryRouter>);
	const backToHomeLink = screen.getByRole('link', { name: 'Back to Homepage' });

	expect(backToHomeLink).toHaveAttribute('href', '/');
});