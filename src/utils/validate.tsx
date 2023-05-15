export const validateName = (value: string): string | undefined => {
    if (value.length === 0) {
      return "This field cannot be empty";
    }
    return undefined;
  };
  
  export const validateEmail = (value: string): string | undefined => {
    if (value.length === 0) {
      return "This field cannot be empty";
    } else if (!isValidEmail(value)) {
      return "Invalid email format";
    }
    return undefined;
  };
  
  export const validatePhone = (value: string): string | undefined => {
    if (value.length === 0) {
      return "This field cannot be empty";
    } else if (isNaN(Number(value))) {
      return "Invalid phone number";
    }
    return undefined;
  };
  
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  