export default function RegisterValidation(formData) {
    const errors = {};

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,25}([A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+ ?){0,24}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]:;"'<>,.?/]).{8,32}$/;
    const numberPattern = /^[1-9]\d{0,2}$/;


    if (!namePattern.test(formData.FirstName)) {
        errors.FirstName = "Niepoprawny format imienia";
    }
    if (!namePattern.test(formData.LastName)) {
        errors.LastName = "Niepoprawny format nazwiska";
    }
    if (!passwordPattern.test(formData.Password)) {
        errors.Password = "Hasło powinno zawierać co najmniej 8 znaków, w tym małą i wielką literę, cyfrę, oraz znak specjalny";
    }
    if (formData.Password !== formData.ConfirmPassword) {
        errors.ConfirmPassword = "Hasła muszą być takie same";
    }
    if (!numberPattern.test(formData.Weight)) {
        errors.Weight = "Wprowadzono niepoprawną liczbę";
    }
    if (!numberPattern.test(formData.ClimaxDoseInMiligramsPerKilogramOfBodyWeight)) {
        errors.ClimaxDoseInMiligramsPerKilogramOfBodyWeight = "Wprowadzono niepoprawną liczbę"
    }
    if (!numberPattern.test(formData.DailyDose)) {
        errors.DailyDose = "Wprowadzono niepoprawną liczbę"
    }
    if (formData.Email === '') {
        errors.Email = "Email nie może być pusty";
    }
    else if (!emailPattern.test(formData.Email)) {
        errors.Email = "Niepoprawny format adresu email";
    }

    return errors;
}