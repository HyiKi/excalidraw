import React, { useEffect, useState } from "react";

import { LoadingMessage } from "./LoadingMessage";
import type { Language } from "../i18n";
import { defaultLang, languages, setLanguage } from "../i18n";
import type { Theme } from "../element/types";
import {API} from "../tests/helpers/api";

interface Props {
  langCode: Language["code"];
  children: React.ReactElement;
  theme?: Theme;
}

export const InitializeApp = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateLang = async () => {
      await setLanguage(currentLang);
      setLoading(false);
    };
    const initLibrary = async () => {
      // init library
      await API.drop(
        await API.loadFile("./library/library.excalidrawlib"),
      );
    }
    const currentLang =
      languages.find((lang) => lang.code === props.langCode) || defaultLang;
    updateLang();
    initLibrary();
  }, [props.langCode]);

  return loading ? <LoadingMessage theme={props.theme} /> : props.children;
};
