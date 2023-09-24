import "@testing-library/jest-dom";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Step1 from "./Step1";

describe("Step1 component", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Step1 values={{}} errors={{}} />);
  });
  afterEach(cleanup);

  it("should render the component with the header", () => {
    const { getByText } = renderResult;
    expect(getByText("Personal Info")).toBeInTheDocument();
  });

  it("should render the Name field", () => {
    const { getByTestId } = renderResult;
    const nameField = getByTestId("name-field");
    expect(nameField).toBeInTheDocument();
  });

  it("should render the Email field", () => {
    const { getByTestId } = renderResult;
    const emailField = getByTestId("email-field");
    expect(emailField).toBeInTheDocument();
  });

  it("should render the phone field", () => {
    const { getByTestId } = renderResult;
    const phoneField = getByTestId("phone-field");
    expect(phoneField).toBeInTheDocument();
  });

  it("should handle input changes for the Name field", async () => {
    const initialValues = { name: "", email: "", phone: "" };
    const initialErrors = { name: "", email: "", phone: "" };

    const { queryAllByTestId } = render(
      <Step1
        values={initialValues}
        errors={initialErrors}
        handleInputChange={() => {}}
      />
    );

    const nameInputFields = queryAllByTestId(
      "name-field"
    ) as HTMLInputElement[];

    // Assuming you we to target the first instance of the name input
    const nameInput = nameInputFields[0];
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    await waitFor(() => {
      expect(nameInput.value).toBe("John Doe");
    });
  });

  it("should handle input changes for the Email field", async () => {
    const initialValues = { name: "", email: "", phone: "" };
    const initialErrors = { name: "", email: "", phone: "" };
    const { queryAllByTestId } = render(
      <Step1
        values={initialValues}
        errors={initialErrors}
        handleInputChange={() => {}}
      />
    );

    const nameInputFields = queryAllByTestId(
      "email-field"
    ) as HTMLInputElement[];

    // Assuming you we to target the first instance of the name input
    const nameInput = nameInputFields[0];
    fireEvent.change(nameInput, { target: { value: "JohnDoe@yahoo.com" } });

    await waitFor(() => {
      expect(nameInput.value).toBe("JohnDoe@yahoo.com");
    });
  });


  it("should handle input changes for the phone field", async () => {
    const initialValues = { name: "", email: "", phone: "" };
    const initialErrors = { name: "", email: "", phone: "" };
    const { queryAllByTestId } = render(
      <Step1
        values={initialValues}
        errors={initialErrors}
        handleInputChange={() => {}}
      />
    );

    const nameInputFields = queryAllByTestId(
      "phone-field"
    ) as HTMLInputElement[];

    // Assuming you we to target the first instance of the name input
    const nameInput = nameInputFields[0];
    fireEvent.change(nameInput, { target: { value: "1234567" } });

    await waitFor(() => {
      expect(nameInput.value).toBe("1234567");
    });
  });

  
});
