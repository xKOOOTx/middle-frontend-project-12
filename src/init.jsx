import debug from "debug";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import App from "./components/App";
import resources from "./locales/index.js";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {NothingFoundBackground} from "./components/NothingFoundBackground/NothingFoundBackground.jsx";
import {Login} from "./components/Login.jsx";
import {Providers} from "./components/Providers.jsx";
import {Registration} from "./components/Registration.jsx";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx";

const logSocket = debug("chat:socket");

// Сокет приходит параметром, открывает его точка входа. Внешний ресурс тем
// самым остаётся на стороне того, кто запускает приложение, и подменить его
// можно снаружи, ничего не меняя внутри.
const init = async (socket) => {
        const i18n = i18next.createInstance();

        await i18n.use(initReactI18next).init({
          resources,
          fallbackLng: "ru",
        });

        // Обработчики событий сокета живут здесь, вне реакта. Это уровень
        // инициализации приложения, и по шагам проекта их станет больше.
        socket.on("newMessage", logSocket);

        return (
              <BrowserRouter>
                    <Providers i18n={i18n}>
                          <Routes>
                                <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/registration" element={<Registration />} />
                                <Route path="*" element={<NothingFoundBackground />} />
                          </Routes>
                    </Providers>
              </BrowserRouter>
        );
};

export default init;
