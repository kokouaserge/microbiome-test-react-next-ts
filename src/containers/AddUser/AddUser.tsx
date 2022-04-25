import { FormGroup, Form } from "reactstrap";
import { Col } from "../../components/Grid/Grid";
import RSelect from "../../components/RSelect/RSelect";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useOrganizations } from "../../hooks/useOrganizations";
import { useAddUser } from "../../hooks/useUsers";

const AddUser = ({ ToggleModal }: any) => {
  const [organization, setOrganization] = useState(1);
  const [organizations, setOrganizations] = useState([]);
  const [userForm, setUserForm] = useState({});
  const { data, isSuccess } = useOrganizations(setOrganizations);
  const mutation = useAddUser(userForm);
  const { errors, register, handleSubmit } = useForm();

  // submit function to add a new item
  const onFormSubmit = (submitData: any) => {
    const { first_name, last_name, email, password } = submitData;
    let submittedData: any = {
      first_name,
      last_name,
      email,
      password,
      organization_id: organization,
    };

    mutation.mutateAsync(submittedData);
    ToggleModal(false);
  };

  const renderSection = () => {
    if (isSuccess) {
      const newFormatOrganizations = organizations.map((e: any) => {
        return {
          value: e.id,
          label: e.name,
        };
      });
      return (
        <Form
          className="row gy-4"
          noValidate
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <Col md="6">
            <FormGroup>
              <label className="form-label">Nom</label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                placeholder="Entrer le nom"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.first_name && (
                <span className="invalid">{errors.first_name.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <label className="form-label">Prénom(s)</label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder="Entrer le prénom"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.last_name && (
                <span className="invalid">{errors.last_name.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <label className="form-label">Email </label>
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Entrer l'email"
                ref={register({
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Adresse email invalide",
                  },
                })}
              />
              {errors.email && (
                <span className="invalid">{errors.email.message}</span>
              )}
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <label className="form-label">Mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="password"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.password && (
                <span className="invalid">{errors.password.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <label className="form-label">Organisation</label>
              <div className="form-control-wrap">
                <RSelect
                  options={newFormatOrganizations}
                  defaultValue={{ label: "string", value: 1 }}
                  onChange={(e: any) => setOrganization(e.value)}
                />
              </div>
            </FormGroup>
          </Col>
          <Col size="12">
            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
              <li>
                <Button color="primary" size="md" type="submit">
                  Ajouter
                </Button>
              </li>
              <li>
                <a
                  href="#cancel"
                  onClick={(ev: any) => {
                    ev.preventDefault();
                    ToggleModal(false);
                  }}
                  className="link link-light"
                >
                  Annuler
                </a>
              </li>
            </ul>
          </Col>
        </Form>
      );
    }
  };

  return (
    <div className="p-2">
      <h5 className="title">Ajouter un utilisateur</h5>
      <div className="mt-4">{renderSection()}</div>
    </div>
  );
};

export default AddUser;
