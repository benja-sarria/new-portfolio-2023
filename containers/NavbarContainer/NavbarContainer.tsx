import { NavbarComponent } from "@/components/NavbarComponent/NavbarComponent";
import { langConf } from "@/utils/langConfig";
import { useTranslations } from "next-intl";
import { SyntheticEvent, useEffect, useState } from "react";

export const NavbarContainer = () => {
	const [openCollapse, setOpenCollapse] = useState<boolean>(false);

	const collapseHandler = (openCollapse: boolean) => {
		setOpenCollapse(!openCollapse);
	};

	const navbarTranslations = useTranslations("navigationComponent");

	useEffect(() => {
		console.log("[LANG] => ", langConf);
	}, [langConf]);

	return (
		<NavbarComponent
			navbarTranslations={navbarTranslations}
			openCollapse={openCollapse}
			collapseHandler={collapseHandler}
		/>
	);
};
