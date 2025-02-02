import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('App', () => {
  it('should add a task', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    await user.type(screen.getByRole('textbox'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(screen.getByRole('listitem')).toHaveTextContent('Buy groceries');
  });

  it('should complete a task', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    await user.type(screen.getByRole('textbox'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: /add/i }));
    await user.click(screen.getByLabelText('Buy groceries'))

    expect(screen.getByLabelText('Buy groceries')).toBeChecked();
  });

  it('should clear all tasks', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    await user.type(screen.getByRole('textbox'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: /add/i }));
    await user.click(screen.getByLabelText('Buy groceries'))
    await user.click(screen.getByRole('button', { name: /clear completed/i }));
    expect(screen.queryByLabelText('Buy groceries')).not.toBeInTheDocument();
  })
})
