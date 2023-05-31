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

describe("testing ArtPiece component", () => {
  it("should render all art pieces are displayed as a list", () => {
    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", {
      name: /artPieces/i,
    });

    const { getAllByRole } = within(list);

    const items = getAllByRole("listitem");

    expect(items.length).toBe(3);
  });

  it("should render each art piece's image", () => {
    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", {
      name: /artPieces/i,
    });

    const images = within(list).getAllByRole("img");
    images.map((image) => {
      expect(image.src).toBeTruthy();
    });
    expect(images.length).toBe(3);
  });

  it("should render each art piece's title", () => {
    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", {
      name: /artPieces/i,
    });

    const titles = within(list).getByText();
    titles.map((title) => {
      expect(title).toBeTruthy();
    });
    expect(titles.length).toBe(3);
  });

  it("should render each art piece's artist", () => {
    render(<ArtPieces pieces={mocked} />);

    const list = screen.getByRole("list", {
      name: /artPieces/i,
    });

    const items = within(list).getAllByRole("listitem");

    items.map((item) => {
      let artist = item.textContent;
      expect(artist).toContain("Artist: ");
      console.log(artist);

      //   artist = artist.substring(0, "Artist: ".length - 1);
      //   console.log(artist);
      expect(artist).toBeTruthy();
    });
    expect(items.length).toBe(3);
  });
});
