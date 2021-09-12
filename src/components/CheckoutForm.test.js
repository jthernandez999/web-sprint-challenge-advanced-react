import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    userEvent.type(firstName, 'Joe');
    expect(firstName).toHaveValue('Joe');

    const lastName = screen.getByLabelText(/last name/i);
    userEvent.type(lastName, 'Hernandez');
    expect(lastName).toHaveValue('Hernandez');

    const address = screen.getByLabelText(/address/i);
    userEvent.type(address, '1111 test st');
    expect(address).toHaveValue('1111 test st');
    
    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, 'Los Angeles');
    expect(city).toHaveValue('Los Angeles');
    
    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, 'CA');
    expect(state).toHaveValue('CA');

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, '91006');
    expect(zip).toHaveValue('91006');

    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    await waitFor(() => {
        const firstName = screen.queryByText(/joe/i);
        const lastName = screen.queryByText(/hernandez/i);
        const address = screen.queryByText(/1111 test st/i);
        const city = screen.queryByText(/los angeles/i);
        const state = screen.queryByText(/ca/i);
        const zip = screen.queryByText(/91006/i);
        const img = screen.queryByRole(/img/i)

            expect(firstName).toBeInTheDocument();
            expect(lastName).toBeInTheDocument();
            expect(address).toBeInTheDocument();
            expect(city).toBeInTheDocument();
            expect(state).toBeInTheDocument();
            expect(zip).toBeInTheDocument();
            expect(img).toBeInTheDocument();
    })


    screen.debug()
});
