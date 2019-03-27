import React, { Component } from "react"
import "../style/Contact.css"


const errorsData = {
    errorName: "Imię musi zawierać przynajmniej 3 liter",
    errorSurname: "Nazwisko musi zawierać przynajmniej 5 liter",
    errorEmail: "Email musi zawierać @",
    errorTextArea: "Uzupełnij pole tekstowe",
    errorAccept: "Zaznacz pole"
}


class Contact extends Component {
    state = {
        formStatus: false,
        name: "",
        surname: "",
        email: "",
        textArea: "",
        accept: false,
        message: "",
        errors: {
            errName: false,
            errSurname: false,
            errEmail: false,
            errTextArea: false,
            errAccept: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const validation = this.formValidation()

        // console.log(validation)

        if (validation.correct) {
            this.setState({
                name: "",
                surname: "",
                email: "",
                textArea: "",
                accept: false,
                message: "Formularz został wysłany",
                errors: {
                    errName: false,
                    errSurname: false,
                    errEmail: false,
                    errTextArea: false,
                    errAccept: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    errName: !validation.name,
                    errSurname: !validation.surname,
                    errEmail: !validation.email,
                    errTextArea: !validation.textArea,
                    errAccept: !validation.accept
                }
            })
        }
    }
    formValidation = () => {
        let name = false;
        let surname = false;
        let email = false;
        let textArea = false;
        let accept = false;
        let correct = false

        if (this.state.name.length >= 3) {
            name = true
        } if (this.state.surname.length >= 5) {
            surname = true
        } if (this.state.email.indexOf("@") !== -1) {
            email = true
        } if (this.state.textArea.trim() !== "") {
            textArea = true
        } if (this.state.accept) {
            accept = true
        } if (name && surname && email && textArea && accept) {
            correct = true
        }
        return ({
            name,
            surname,
            email,
            textArea,
            accept,
            correct,
        }
        )
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name !== "checkBox") {
            this.setState({
                [name]: value
            })
        } else {
            this.setState({
                accept: !this.state.accept
            })
        }
    }
    componentDidUpdate() {
        if (this.state.message !== "") {
            setTimeout(() => {
                this.setState({
                    message: ""
                })
            }, 3000)

        }
    }
    handleShowForm = () => {
        this.setState({
            formStatus: !this.state.formStatus
        })
    }
    render() {
        const { name, surname, textArea, email, accept, message, formStatus } = this.state
        const { errName, errSurname, errEmail, errTextArea, errAccept } = this.state.errors
        return (
            <>
                <div className="contact">
                    <h2>Rehabilitacja Sportowa i Dietetyka Tomasz Jasik</h2>
                    <h3>Zapisz sie na wizyte:</h3>
                    <p>Sanok,ul.Mickiewicza 29</p>
                    <p>Tel: 508-813-267</p>
                    <p>E-mail: tomekjasik.pl@gmail.com</p>
                    <h3>Znajdź mnie na GoogleMap</h3>
                    <iframe title="contact" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.694747285605!2d22.20191361587225!3d49.56578255859075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c6d8374465ac1%3A0x9d8f13a47269fc03!2sMickiewicza+29%2C+38-500+Sanok!5e0!3m2!1spl!2spl!4v1552562517574"}></iframe>
                </div>
                <h3 className="buttonForm" onClick={this.handleShowForm}>Napisz do mnie!
                {formStatus ? <p>Ukryj fromularz</p> : <p>Pokaż formularz</p>}</h3>
                <div className={`form-container ${formStatus ? `showForm` : ``}`}>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <div className="form_element">
                            <label htmlFor="name">Imie</label>
                            <input placeholder="Jan" type="text" name="name" id="name" value={name} onChange={this.handleChange}
                            />{errName && <span>{errorsData.errorName}</span>}
                        </div>
                        <div className="form_element">
                            <label htmlFor="surname">Nazwisko</label>
                            <input placeholder="Kowalski" type="text" name="surname" id="surname" value={surname} onChange={this.handleChange} />
                            {errSurname && <span>{errorsData.errorSurname}</span>}
                        </div>

                        <div className="form_element">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Jan.Kowalski@gmail.com" type="email" name="email" id="email" value={email}
                                onChange={this.handleChange} /> {errEmail && <span>{errorsData.errorEmail}</span>}
                        </div>
                        <div className="form_element">
                            <label htmlFor="textArea">Napisz do mnie</label>
                            <textarea placeholder="Wpisz tekst..." id="textArea" name="textArea" value={textArea} onChange={this.handleChange} rows="8" /> {errTextArea && <span>{errorsData.errorTextArea}</span>}
                        </div>
                        <div className="form_element">
                            <label htmlFor="checkBox">Wyrażam zgode</label>
                            <input type="checkbox" id="checkBox" name="checkBox" checked={accept} onChange={this.handleChange} />
                            {errAccept && <span>{errorsData.errorAccept}</span>}
                        </div>
                        <div className="btn">
                            <button>Wyślij</button>
                        </div>
                        {message ? <span className="message">{message}</span> : null}
                    </form>
                </div>

            </>
        );
    }
}

export default Contact;