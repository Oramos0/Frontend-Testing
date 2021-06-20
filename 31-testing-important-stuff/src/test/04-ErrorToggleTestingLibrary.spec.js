import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/vue"
import ErrorToggle from '@/components/ErrorToggle.vue'

describe("Error Togle", () => {
  it("Should toggle contact messege when button is clicked", async () => {
    render(ErrorToggle)

    const button = screen.getByRole("button", { name: /more/i })
    await fireEvent.click(button)

    const message = screen.getByRole("alert")
    // Que este en el documento
    expect(message).toBeInTheDocument()
    // Que este en el contenido del texto
    expect(message).toHaveTextContent(/for more information contact us/i)

    await fireEvent.click(button)

    expect(screen.queryByRole("alert")).not.ToBeInTheDocument
  })
})
