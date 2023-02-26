import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const langConf = {
	ES_LANG: process.env.NEXT_PUBLIC_ES_LANG as string,
	ENG_LANG: process.env.NEXT_PUBLIC_ENG_LANG as string,
};
