import InputCheckbox from '../InputCheckbox/InputCheckbox'
import InputRadio from '../InputRadio/InputRadio'
import './Form.css'

export function Form() {
  return (
    <>
      <form>
        <fieldset>
          <legend>Escolha um plano</legend>
          <InputRadio
            name="plans"
            id="standard"
            label="Básico"
            details="5TB de armazenamento amet consectetur adipisicing elit tools. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            checked
          />
          <InputRadio
            name="plans"
            id="advanced"
            label="Avançado"
            details="100TB de armazenamento dolor sit eius nostrum deserunt doloremque quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis accusamus modi asperiores. In, officiis quod!"
          />

          <InputCheckbox
            id="terms"
            label={["Eu concordo com os", <a href="/"> Termos e Condições</a>, ". Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus odio."]}
          />

          <InputCheckbox
            id="mailing"
            label="Eu gostaria de receber ofertas por e-mail. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <button type="submit">Iniciar teste gratuito</button>

          <small>Não é necessário cartão de crédito</small>
        </fieldset>
      </form>
    </>
  )
}