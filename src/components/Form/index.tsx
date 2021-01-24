import React, { useState } from "react";

import { useForm } from "react-hook-form";

import "./styles.css";

const initialState = { name: "", email: "", language: "", dev: "", bio: "" };

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { register, handleSubmit, errors } = useForm();

  const handleInputChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (data: any) => {
    console.log("*** handleSubmit", data);
  };

  console.log("*** formvalues", formValues);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleInputChange}
          value={formValues.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={formValues.email}
          ref={register({
            required: "Insira um email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Insira um email válido",
            },
          })}
        />

        {errors.email && <p className="error">{errors.email.message}</p>}

        <select
          name="language"
          onChange={handleInputChange}
          value={formValues.language}
        >
          <option value="">Selecione</option>
          <option value="c#">C#</option>
          <option value="typescript">TypeScript</option>
        </select>

        <div className="radios">
          <label>
            <input
              type="radio"
              value="dev"
              name="dev"
              onChange={handleInputChange}
              checked={formValues.dev === "dev"}
            />
            Desenvolvedor
          </label>
          <label>
            <input
              type="radio"
              value="estudante"
              name="dev"
              onChange={handleInputChange}
              checked={formValues.dev === "estudante"}
            />
            Estudante
          </label>
        </div>

        <textarea
          name="bio"
          onChange={handleInputChange}
          value={formValues.bio}
          placeholder="Siga @plrnss no Instagram!"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
