import { LeadToComponent } from "@/components/LeadToComponent/LeadToComponent";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import childStyles from "../../components/LeadToComponent/LeadToComponent.module.scss";

export const LeadToContainer = () => {
	const [childRef, setChildRef] = useState<any>(undefined);
	const [overrideScrollBlock, setOverrideScrollBlock] =
		useState<boolean>(false);
	const leadToTranslations = useTranslations("leadToComponent");

	const enableScroll = () => {
		setOverrideScrollBlock(true);
		document.body.classList.remove(childStyles["prevent-scroll"]);
		window.removeEventListener("scroll", preventScroll);
	};

	const preventScroll = (evt: Event) => {
		if (!overrideScrollBlock) {
			evt.preventDefault();
			console.log(
				"[REF] => ",
				+childRef?.current?.offsetTop,
				+window.scrollY + 675
			);
			if (+childRef?.current?.offsetTop <= +window.scrollY + 675) {
				if (
					!document.body.classList.contains(
						childStyles["prevent-scroll"]
					)
				) {
					document.body.classList.add(childStyles["prevent-scroll"]);
				}
			}
		}
	};
	useEffect(() => {
		if (!overrideScrollBlock) {
			window.addEventListener("scroll", preventScroll);
		}
		return () => {
			window.removeEventListener("scroll", preventScroll);
		};
	});

	useEffect(() => {}, [childRef]);

	return (
		<LeadToComponent
			leadToTranslations={leadToTranslations}
			setChildRef={setChildRef}
			childRef={childRef}
			enableScroll={enableScroll}
		/>
	);
};
