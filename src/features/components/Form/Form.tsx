import styles from "./Form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../../shared/ui/Input/Input";
import { InputTheme } from "../../../shared/ui/Input/Input.const";
import { Button } from "../../../shared/ui/Button/Button";
import { schema, type Schema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonTheme } from "../../../shared/ui/Button/Button.const";
import Modal from "react-modal";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Form = () => {
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
      navigate("/personal");
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
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <Input
            className="input"
            type="text"
            placeholder="Введите Username"
            theme={InputTheme.BLANK}
            {...register("username")}
          />
          {errors.username && (
            <span className={styles.error}>{errors.username.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <Input
            className="input"
            type="password"
            placeholder="Введите Password"
            theme={InputTheme.BLANK}
            {...register("password")}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <Button label={"Подтвердить"} theme={ButtonTheme.FORM} />
      </form>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Ошибка"
        className={styles.modal}
      >
        <h2 className={styles.modal_title}>Ошибка!</h2>
        <p className={styles.modal_text}>
          {errorMessage || "Произошла неизвестная ошибка"}
        </p>
      </Modal>
    </div>
  );
};
