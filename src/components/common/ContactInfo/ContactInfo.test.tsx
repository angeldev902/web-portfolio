import { render, screen } from '@testing-library/react';
import ContactInfo from './index';

describe('ContactInfo', () => {
  const mockProps = {
    email: 'user@example.com',
    github: 'https://github.com/user',
    linkedIn: 'https://linkedin.com/in/user',
    image: '/mail.png',
    title: 'Contáctame',
    text: 'Estoy disponible para colaborar en proyectos interesantes.',
  };

  test('renderiza correctamente la información de contacto', () => {
    render(<ContactInfo {...mockProps} />);

    // Verify that the title is present
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Verify that the text is present
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();

    // Verify that the email is present
    expect(screen.getByText(mockProps.email)).toBeInTheDocument();

    // Verify the links 
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', mockProps.github);
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', mockProps.linkedIn);

    // Verify the image is present
    expect(screen.getByAltText('contact')).toBeInTheDocument();
  });
});
