import {Notifications} from "@mantine/notifications";
import {MantineProvider} from "@mantine/core";
import {I18nextProvider} from "react-i18next";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export const Providers = ({i18n, children}) => {

      return (
            <MantineProvider>
                  <Notifications position="bottom-right" />
                  <I18nextProvider i18n={i18n}>
                        {children}
                  </I18nextProvider>
            </MantineProvider>
      )
}