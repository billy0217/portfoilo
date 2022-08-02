import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Card from "../Card";

test("Card link should be project", () => {
	const props = {
		slug : "project",
		name: "Project Name",
		role: "Full Stack Developer",
		company: "Freelance"
	}

	render(<MemoryRouter><Card project={props} /></MemoryRouter>);

	const projectLink = screen.getByRole('link');

	expect(projectLink).toHaveAttribute('href', '/work/project');
});

test("Card heading should be Project Name", () => {
	const props = {
		slug : "project",
		name: "Project Name",
		role: "Full Stack Developer",
		company: "Freelance"
	}

	render(<MemoryRouter><Card project={props} /></MemoryRouter>);

	const projectName = screen.getByRole('heading', {level: 3});

	expect(projectName.textContent).toBe("Project Name");
});

test("Card role text should be Full Stack Developer role from Freelance", () => {
	const props = {
		slug : "project",
		name: "Project Name",
		role: "Full Stack Developer",
		company: "Freelance"
	}

	render(<MemoryRouter><Card project={props} /></MemoryRouter>);

	const projectRole = screen.getByText(/full/i);

	expect(projectRole.textContent).toBe("Freelance - Full Stack Developer role");
});