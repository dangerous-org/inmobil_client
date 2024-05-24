import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carrousel from "../components/Carrousel/Carrousel";

describe("Carrousel component", () => {

  it("must renders with default props", () => {
    
    render(<Carrousel />);

    const carrouselElement = screen.getByRole("figure");
    expect(carrouselElement).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /img/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "left arrow" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "right arrow" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("contentinfo", { name: "carrousel footer" })
    ).toBeInTheDocument();
  });

  it("must renders with custom props", () => {

    const images = ["image1.jpg", "image2.jpg"];
    const index = 3;
    const footerControl = true;

    render(
      <Carrousel images={images} index={index} footerControl={footerControl} />
    );

    const carrouselElement = screen.getByRole("figure");
    expect(carrouselElement).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /img/i })).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "left arrow" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "right arrow" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("contentinfo", { name: "carrousel footer" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "footer control" })
    ).toBeInTheDocument();
  });

});
