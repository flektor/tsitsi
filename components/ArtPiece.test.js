import { render, screen, within } from "@testing-library/react";
import React from "react";
import ArtPieces from "./ArtPieces";

const mocked = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    year: "2019",
    genre: "Abstract Painting",
    colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
    dimensions: {
      height: 2560,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
    genre: "Classics",
    colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
    dimensions: {
      height: 1280,
      width: 1920,
      type: "jpg",
    },
  },
];

//
describe("test with expected props", () => {
  it("should render all art pieces are displayed as a list", () => {
    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", { name: /artPieces/i });

    const { getAllByRole } = within(list);

    const items = getAllByRole("listitem");

    expect(items.length).toBe(mocked.length);
  });

  it("should render each art piece's image", () => {
    const expected = mocked.map(
      (art) =>
        art.imageSource
          .replaceAll("/", "%2F")
          .replace("https:", "http://localhost/_next/image?url=https%3A") +
        "&w=3840&q=75"
    );

    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", { name: /artPieces/i });

    const images = within(list)
      .getAllByRole("img")
      .map((image) => image.src);

    expect(images).toEqual(expected);
  });

  it("should render each art piece's title", () => {
    const expected = mocked.map((piece) => piece.name);

    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", { name: /artPieces/i });

    const headings = within(list).getAllByRole("heading");

    const titles = headings.map((heading) => heading.textContent);

    expect(titles).toEqual(expected);
  });

  it("should render each art piece's artist", () => {
    const expected = mocked.map((piece) => piece.artist);

    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", { name: /artPieces/i });

    const artists = within(list).getAllByLabelText("artist");

    const content = artists.map((artist) => artist.textContent);
    expect(content).toEqual(expected);
  });
});

describe("test edge cases", () => {
  it('should render "There is nothing to display" if the pieces prop is undefined', () => {
    const { getAllByText } = render(<ArtPieces />);

    const text = getAllByText("There is nothing to display");
    expect(text).toBeTruthy();
  });

  it('should render "There is nothing to display" if the pieces prop has length equal to 0', () => {
    const { getAllByText } = render(<ArtPieces pieces={[]} />);

    const text = getAllByText("There is nothing to display");
    expect(text).toBeTruthy();
  });
});
