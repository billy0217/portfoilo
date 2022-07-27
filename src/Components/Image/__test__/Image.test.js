import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "../Image";

test("image src should be project.jpg", ()=> {
	const props = {
		webp : "/project.webp",
		src : "/project.jpg",
		alt : "Project Name"
	}

	render(<Image img={props} />);

	const imgComponent = screen.getByRole('img');

	expect(imgComponent).toHaveAttribute('src', '/project.jpg');
});