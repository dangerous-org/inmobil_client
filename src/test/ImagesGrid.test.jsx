import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ImagesGrid from "../components/ImagesGrid/ImagesGrid";

describe("Grid Images Component", () => {


  it("must shows images when images they were received", () => {

    const images = ['img1.png', 'img2.png', 'img3.jpg']

    render(<ImagesGrid images={images}/>);

    const imagesGrid = screen.getByRole("contentinfo");
    expect(imagesGrid).toBeInTheDocument();

    const figures = screen.getAllByRole('figure', { name: 'image' });

    figures.forEach(figure =>{
        expect(figure).toBeInTheDocument()
    })

  });

  it('There should be no error when the images are not supplied', ()=>{

    render(<ImagesGrid/>)

    const imagesGrid = screen.getByRole("contentinfo");
    expect(imagesGrid).toBeInTheDocument();

  })
});
