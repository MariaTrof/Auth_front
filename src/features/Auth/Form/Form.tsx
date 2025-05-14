import styles from "./Form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { schema, type Schema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTheme } from "../../../shared/ui/Input/Input.const";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";
import { ButtonTheme } from "../../../shared/ui/Button/Button.const";
import { PATHS } from "../../../shared/config/routes";

const Form = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: Schema) => {
    try {
      await login(data.username, data.password);
      navigate(PATHS.PERSONAL);
    } catch (error) {
      let message = "Произошла неизвестная ошибка";

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      }

      setErrorMessage(message);
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.box}>
      <form
        className={styles.container}
        onSubmit={handleSubmit(onSubmit)}
        aria-labelledby="formTitle"
      >
        <div className={styles.inputGroup}>
          <label htmlFor="username-input" className={styles.label}>
            Имя пользователя:
          </label>
          <Input
            id="username-input"
            className="input"
            type="text"
            placeholder="Введите Username"
            theme={InputTheme.BLANK}
            {...register("username")}
            aria-invalid={!!errors.username}
            aria-describedby={errors.username ? "username-error" : undefined}
          />
          <div aria-live="polite">
            {errors.username && (
              <span id="username-error" className={styles.error}>
                {errors.username.message}
              </span>
            )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password-input" className={styles.label}>
            Пароль:
          </label>
          <Input
            id="password-input"
            className="input"
            type="password"
            placeholder="Введите Password"
            theme={InputTheme.BLANK}
            {...register("password")}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <div aria-live="polite">
            {errors.password && (
              <span id="password-error" className={styles.error}>
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <Button theme={ButtonTheme.FORM} aria-label="Подтвердить" type="submit">
          Подтвердить
        </Button>
      </form>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Ошибка"
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={true}
      >
        <h2 id="modal-title" className={styles.modal_title}>
          Ошибка!
        </h2>
        <p id="modal-description" className={styles.modal_text}>
          {errorMessage || "Произошла неизвестная ошибка"}
        </p>
        <Button
          theme={ButtonTheme.FORM}
          aria-label="Закрыть"
          onClick={() => setIsOpen(false)}
          autoFocus
        >
          Закрыть
        </Button>
      </Modal>
    </div>
  );
};

export default Form;
