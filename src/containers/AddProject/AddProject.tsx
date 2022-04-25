import { FormGroup, Form } from "reactstrap";
import { Col } from "components/Grid/Grid";
import RSelect from "components/RSelect/RSelect";
import Button from "components/Button/Button";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { useAddProject } from "hooks/useProjects";

export default function AddProject({ ToggleModal, users }: any) {
  const [user, setUser] = useState(1);
  const [userFormat, setUserFormat] = useState([]);
  const [userForm, setUserForm] = useState({});
  const mutation = useAddProject(userForm);

  useEffect(() => {
    const usersformatArr = users.map((user: any) => {
      return {
        label: user.first_name + " " + user.last_name,
        value: user.id,
      };
    });

    setUserFormat(usersformatArr);
  }, [users]);

  const onFormSubmit = (sData: any) => {
    const { code, description } = sData;
    let submittedData: any = {
      code,
      description,
      user_id: user,
    };
    mutation.mutateAsync(submittedData);
    ToggleModal(false);
  };

  const { errors, register, handleSubmit } = useForm();
  return (
    <div className="p-2">
      <h5 className="title">Ajouter un Project</h5>
      <div className="mt-4">
        <Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
          <Col md="6">
            <FormGroup>
              <label className="form-label">Proprietaire</label>
              <RSelect
                options={userFormat}
                onChange={
                  (e: any) => setUser(e.value)
                  // setFormData({ ...formData, lead: e.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <label className="form-label">Code</label>
              <input
                type="text"
                name="code"
                placeholder="Entrer le code"
                className="form-control"
                ref={register({ required: "Ce champ est obligatoire" })}
              />
              {errors.code && (
                <span className="invalid">{errors.code.message}</span>
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
                <Button
                  onClick={(ev: any) => {
                    ev.preventDefault();
                    ToggleModal(false);
                  }}
                  className="link link-light"
                >
                  Annuler
                </Button>
              </li>
            </ul>
          </Col>
        </Form>
      </div>
    </div>
  );
}
