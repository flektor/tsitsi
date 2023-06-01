// import { useRouter } from 'next/router';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Spotlight from './[Spotlight]';
// import mockRouter from 'next-router-mock';
// import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

// // jest.mock('next/router', () => require('next-router-mock'));
// // it('NextLink can be rendered', () => {
// //     render(
// //         <Spotlight useRouter={`"Spotlight":"orange-red-and-green"`} />, 
// //       { wrapper: MemoryRouterProvider }
// //     );
// //     fireEvent.click(screen.getByText('Random Art Piece'));
// //     expect(mockRouter.asPath).toEqual('/[spotlight]')
// //   });







// // test('renders the Artist`s name correctly when loading page', () => {
// //     render(<Spotlight useRouter={`"Spotlight":"orange-red-and-green"`} />);
// //     const pElement = screen.getByText(/Artist :Steve Johnson/i);
// //     expect(pElement).toBeInTheDocument();
// //   });
// //   const ExampleComponent = ({ href = '' }) => {
// //     const router = useRouter();
// //     return (
// //       <button onClick={() => router.push(href)}>
// //         The current route is: "{router.asPath}"
// //       </button>
// //     );
// //   }
  
// //   test('rendersthe Artist`s name when with a name', () => {
// //     render(<Spotlight slug= "blue-and-red" />);
// //     const pElement = screen.getByText(/Artist :Jung-Hua Lui/i);
// //     expect(pElement).toBeInTheDocument();
// //   });
// //   test('clicking the Get Random button should load the new Image and Artist', () => {
// //     render(<Spotlight></Spotlight>)
// //     fireEvent.click(screen.getByText('Random Art Piece'))

// //     expect(screen.getByTestId('piece-value').outerHTML).toContainElement('img')
// // })