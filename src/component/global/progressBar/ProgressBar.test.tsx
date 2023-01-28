import { ProgressBar } from './index';
import { render, waitFor , act } from "@testing-library/react";


describe('<ProgressBar />', () => {
  it('renders a progress bar with the correct value', async () => {
    const { getByRole } = render(<ProgressBar />)
    const progressBar = getByRole('progressbar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveValue(0)
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    await waitFor(() => {
      expect(progressBar).toHaveValue(24)
    })
  })
})
