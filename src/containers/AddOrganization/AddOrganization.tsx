import React, { useState } from "react";
import { FormGroup, Form } from "reactstrap";
import { Col } from "components/Grid/Grid";
import { useForm } from "react-hook-form";
import Button from "components/Button/Button";
import { useAddOrganization } from "hooks/useOrganizations";

export default function AddOrganization({ ToggleModal }: any) {
  const [organizationForm, setOrganizationForm] = useState({});
  const mutation = useAddOrganization(organizationForm);
  const { errors, register, handleSubmit } = useForm();

  // submit function to add a new item
  const onFormSubmit = (submitData: any) => {
    mutation.mutateAsync(submitData);
    ToggleModal(false);
  };
  return (
    <div className="p-2">
      <h5 className="title">Ajouter une organisation</h5>
      <div className="mt-4">
        <Form
          className="row gy-4"
          noValidate
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <Col md="12">
            <FormGroup>
              <label className="form-label">Nom</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Entrer le nom"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.name && (
                <span className="invalid">{errors.name.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col size="12">
            <FormGroup>
              <label className="form-label">Description</label>
              <textarea
                name="description"
                // defaultValue={formData.description}
                placeholder="Votre description"
                // onChange={(e) => onInputChange(e)}
                className="form-control-xl form-control no-resize"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.description && (
                <span className="invalid">{errors.description.message}</span>
              )}
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
      </div>
    </div>
  );
}
