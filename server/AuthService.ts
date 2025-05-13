import { type AuthResponse, type User } from "./AuthServerice.const";

export const ServiceLogin = async (credentials: {
  username: string;
  password: string;
}): Promise<AuthResponse> => {
  function generateTokens(user: User) {
    const accessToken = `access-${user.id}-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`;
    const refreshToken = `refresh-${user.id}-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`;

    return {
      accessToken,
      refreshToken,
      accessTime: 15 * 60,
    };
  }

  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok)
      throw new Error(`Запрос прошел с неудачей: ${response.status}`);

    const users: User[] = await response.json();

    const foundUser = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
    if (!foundUser) {
      throw new Error("Пользователь не найден.");
    }
    const { accessToken, refreshToken, accessTime } = generateTokens(foundUser);

    document.cookie = `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${
      7 * 24 * 60 * 60
    }`;

    return { user: foundUser, accessToken, accessTime };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Ошибка авторизации:", error.message);
      throw error;
    } else {
      console.error("Ошибка авторизации:", String(error));
      throw error;
    }
  }
};
