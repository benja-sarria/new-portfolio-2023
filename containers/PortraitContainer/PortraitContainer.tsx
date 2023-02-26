import { PortraitComponent } from "@/components/PortraitComponent/PortraitComponent";
import { useTranslations } from "next-intl";

export const PortraitContainer = () => {
	const portraitTranslations = useTranslations("portraitComponent");

	return <PortraitComponent portraitTranslations={portraitTranslations} />;
};
