export   const getPasswordStrength = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const strengthCount = [
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;
    if (strengthCount === 4 && password.length>=6) return {message: "сильный", value: 100, class:"hform__cwpower" };
    if (strengthCount === 4 ) return {message: "средний", value: 66, class:"hform__wpower" };
    if (strengthCount === 3) return {message:"средний", value: 66, class: "hform__wpower"};
    if (strengthCount > 0) return {message: "слабый", value: 33, class: "hform__vwpower" };

    return {message: "очень слабый", value: 0, class: "hform__vwpower" } ;
  };
 