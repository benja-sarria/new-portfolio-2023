import { NavbarComponent } from "@/components/NavbarComponent/NavbarComponent";
import { langConf } from "@/utils/langConfig";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export const NavbarContainer = () => {
	const navbarTranslations = useTranslations("navigationComponent");

	useEffect(() => {
		console.log("[LANG] => ", langConf);
	}, [langConf]);

	return <NavbarComponent navbarTranslations={navbarTranslations} />;
};
